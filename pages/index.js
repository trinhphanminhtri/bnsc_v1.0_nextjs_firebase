import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import Title from "../components/ui/title";
import Services from "../components/services/services";
import ProductList from "../components/products/product-list";
import BannerCountDown from "../components/discount/banner";
import { getAllServices } from "../data/services-data";
import { motion } from "framer-motion";

import DUMMY_PRODUCTS, {
  getAllProducts,
  getFilteredProducts,
} from "../data/products-data";

const Home = () => {
  const allServices = getAllServices();
  const allProducts = getAllProducts();
  // const allWineProducts = getFilteredProducts("wine");
  const [bestSales, setBestSales] = useState(allProducts);
  const [trendingProducts, setTrendingProducts] = useState(allProducts);
  const [newArrivals, setNewArrivals] = useState(allProducts);

  useEffect(() => {
    const filteredTrendingProducts = allProducts.filter(
      (item) => item.category === "wine"
    );

    const bestSalesProducts = allProducts.filter(
      (item) =>
        item.category === "sparkling" ||
        item.category === "nut" ||
        item.id === "wine-368" ||
        item.id === "wine-568" ||
        item.category === "oil"
    );
    const newArrivals = allProducts.filter(
      (item) => item.isNewArrivals === true
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSales(bestSalesProducts);
    setNewArrivals(newArrivals);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Benison - Trang chủ</title>
      </Head>

      <Hero />
      <Services items={allServices} />
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
      {/* <ProductList items={allWineProducts} /> */}

      <Title title={"Sản phẩm bán chạy"} />
      <ProductList items={bestSales} />
      <BannerCountDown />

      <Title title={"Hàng mới về"} />
      <ProductList items={newArrivals} />
    </Fragment>
  );
};
export default Home;
