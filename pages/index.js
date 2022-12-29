import Head from "next/head";
import { Fragment } from "react";
import { motion } from "framer-motion";

import { getFeaturedProducts, getAllNewArrivals } from "../helpers/api-util";
import Hero from "../components/hero/Hero";
import Title from "../components/ui/title";
import Services from "../components/services/services";
import ProductList from "../components/products/product-list";
import BannerCountDown from "../components/discount/banner";

const HomePage = (props) => {
  // const { featuredProducts, newArrivals } = props;
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
      <ProductList items={props.featuredProducts} />

      <BannerCountDown />

      <Title title={"Hàng mới về"} />
      <ProductList items={props.newArrivals} />
    </Fragment>
  );
};
// index page: no need server-side rendering: re-rendering for every request
export async function getStaticProps() {
  const featuredProducts = await getFeaturedProducts();
  const newArrivals = await getAllNewArrivals();
  return {
    props: {
      featuredProducts: featuredProducts,
      newArrivals: newArrivals,
    },
  };
}

export default HomePage;
