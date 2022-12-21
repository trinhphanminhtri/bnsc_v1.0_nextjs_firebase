import fs from "fs/promises";
import path from "path";

import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import Title from "../components/ui/title";
import Services from "../components/services/services";
import ProductList from "../components/products/product-list";
import BannerCountDown from "../components/discount/banner";
import { motion } from "framer-motion";

const HomePage = (props) => {
  const { allProductsData } = props;
  const [bestSales, setBestSales] = useState(allProductsData);
  const [trendingProducts, setTrendingProducts] = useState(allProductsData);
  const [newArrivals, setNewArrivals] = useState(allProductsData);

  useEffect(() => {
    const filteredTrendingProducts = allProductsData.filter(
      (item) => item.category === "wine"
    );

    const bestSalesProducts = allProductsData.filter(
      (item) =>
        item.category === "sparkling" ||
        item.category === "nut" ||
        item.id === "wine-368" ||
        item.id === "wine-568" ||
        item.category === "oil"
    );
    const newArrivals = allProductsData.filter(
      (item) => item.isNewArrivals === true
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSales(bestSalesProducts);
    setNewArrivals(newArrivals);
  }, [allProductsData]);

  return (
    <Fragment>
      <Head>
        <title>Benison - Trang chủ</title>
      </Head>

      <Hero />

      <Services />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <Title title={"Sản phẩm nổi bật"} />
      </motion.div>
      <ProductList items={trendingProducts} />

      <Title title={"Sản phẩm bán chạy"} />
      <ProductList items={bestSales} />

      <BannerCountDown />

      <Title title={"Hàng mới về"} />
      <ProductList items={newArrivals} />
    </Fragment>
  );
};

export async function getStaticProps() {
  console.log("(Re-)Generating...");
  const filePath = path.join(process.cwd(), "data", "products-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: { destination: "/no-data" },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      allProductsData: data.products,
    },
    revalidate: 10,
    // notFound: true,
  };
}

export default HomePage;
