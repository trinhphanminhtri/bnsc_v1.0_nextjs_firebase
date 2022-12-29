// Using the FileSystem
import fs from "fs/promises";
import path from "path";
// End Using the FileSystem

// Fetching from firebase
import { getFeaturedProducts, getAllNewArrivals } from "./helpers/api-util";
// End Fetching from firebase

import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";

import Hero from "./components/hero/Hero";
import Title from "./components/ui/title";
import Services from "./components/services/services";
import ProductList from "./components/products/product-list";
import FeaturedPosts from "./components/posts/featured-posts";
import BannerCountDown from "./components/discount/banner";

const DUMMY_POSTS = [
  {
    slug: "brand-opening-01",
    title: "brand-opening",
    image: "brand-opening-01.jpg",
    excerpt: "Khai trương chi nhánh Benison ở An Giang",
    date: "2022-12-27",
  },
  {
    slug: "brand-opening-02",
    title: "brand-opening",
    image: "brand-opening-02.jpg",
    excerpt: "Khai trương chi nhánh Benison ở An Giang",
    date: "2022-12-27",
  },
  {
    slug: "brand-opening-03",
    title: "brand-opening",
    image: "brand-opening-03.jpg",
    excerpt: "Khai trương chi nhánh Benison ở An Giang",
    date: "2022-12-27",
  },
  {
    slug: "brand-opening-04",
    title: "brand-opening",
    image: "brand-opening-04.jpg",
    excerpt: "Khai trương chi nhánh Benison ở An Giang",
    date: "2022-12-27",
  },
  {
    slug: "brand-opening-05",
    title: "brand-opening",
    image: "brand-opening-05.jpg",
    excerpt: "Khai trương chi nhánh Benison ở An Giang",
    date: "2022-12-27",
  },
  {
    slug: "brand-opening-06",
    title: "brand-opening",
    image: "brand-opening-06.jpg",
    excerpt: "Khai trương chi nhánh Benison ở An Giang",
    date: "2022-12-27",
  },
  {
    slug: "brand-opening-07",
    title: "brand-opening",
    image: "brand-opening-07.jpg",
    excerpt: "Khai trương chi nhánh Benison ở An Giang",
    date: "2022-12-27",
  },
  {
    slug: "brand-opening-08",
    title: "brand-opening",
    image: "brand-opening-08.jpg",
    excerpt: "Khai trương chi nhánh Benison ở An Giang",
    date: "2022-12-27",
  },
];
const HomePage = (props) => {
  const { featuredProducts, newArrivals } = props;
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
      <ProductList items={featuredProducts} />

      <BannerCountDown />

      <Title title={"Hàng mới về"} />
      <ProductList items={newArrivals} />

      <Title title={"Thông tin nổi bật"} />
      {/* <FeaturedPosts posts={DUMMY_POSTS} /> */}
    </Fragment>
  );
};

export async function getStaticProps() {
  // Using the FileSystem
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData); // converted to js object

  if (!data) {
    return {
      redirect: { destination: "/contact" },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }
  // End Using the FileSystem

  // Fetching from firebase
  // const allFeaturedproducts = await getFeaturedProducts();
  // const allNewArrivals = await getAllNewArrivals();
  // End Fetching from firebase


  const featuredProducts = data.products.filter(product => product.isFeatured)
  const newArrivals = data.products.filter(product => product.isNewArrivals)
  return {
    props: {
      // Using the FileSystem
      products: data.products,
      featuredProducts: featuredProducts,
      newArrivals: newArrivals,
      // End Using the FileSystem
    },
    revalidate: 60,
  };
}

export default HomePage;
