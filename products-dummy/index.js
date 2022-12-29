// Using the FileSystem
import fs from "fs/promises";
import path from "path";
// End Using the FileSystem

import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import {
  getAllProducts,
  getAscendingProducts,
  getDescendingProducts,
} from "../helpers/api-util";

import CommonHero from "../components/ui/common-hero";
import ProductList from "../components/products/product-list";
import ProductSearchByCategory from "../components/products/product-search-by-category";
import ProductSearchBox from "../components/products/product-search-box";
import ProductSortSearch from "../components/products/product-search-sort";
import classes from "../../styles/Products.module.css";

const Products = (props) => {
  const { allProducts } = props;
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  // const [sortByDescPrice, setSortByDescPrice] = useState([]);

  const categorizedProductsHandler = (data) => {
    const filterData = data.target.value;
    if (filterData === "") {
      setFilteredProducts(allProducts);
    }
    if (filterData === "honey") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "honey"
      );
      setFilteredProducts(filteredProducts);
    }
    if (filterData === "oil") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "oil"
      );
      setFilteredProducts(filteredProducts);
    }
    if (filterData === "sparkling") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "sparkling"
      );
      setFilteredProducts(filteredProducts);
    }
    if (filterData === "cereal") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "cereal"
      );
      setFilteredProducts(filteredProducts);
    }
    if (filterData === "driedfruit") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "driedfruit"
      );
      setFilteredProducts(filteredProducts);
    }
    if (filterData === "nut") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "nut"
      );
      setFilteredProducts(filteredProducts);
    }
    if (filterData === "wine") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "wine"
      );
      setFilteredProducts(filteredProducts);
    }
  };
  const searchBoxHandler = (data) => {
    const searchText = data.target.value;
    const productsSearch = allProducts.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    setFilteredProducts(productsSearch);
  };
  /*
  const sortPriceHandler = (data) => {
    const sortData = data.target.value;
    if (sortData === "") {
      setFilteredProducts(allProducts);
    }
    if (sortData === "ascending") {
      console.log("Sắp xếp tăng dần");
      allProducts.sort((a, b) => a.price - b.price);
      setFilteredProducts(allProducts);
    }

    if (sortData === "descending") {
      console.log("Sắp xếp giảm dần");
      allProducts.sort((a, b) => b.price - a.price);
      setFilteredProducts(allProducts);
    }
  };
  */
  return (
    <Fragment>
      <Head>
        <title>Benison - Tất cả sản phẩm</title>
      </Head>
      <CommonHero title={"Sản phẩm"} />

      {/* filter section */}
      <section className={classes.filterSection}>
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6">
              <ProductSearchByCategory
                functionHandler={categorizedProductsHandler}
              />
            </Col>
            <Col lg="3" md="6" sm="6" className="text-end">
              {/* <ProductSortSearch functionHandler={sortPriceHandler} /> */}
            </Col>
            <Col lg="6" md="12">
              <ProductSearchBox functionHandler={searchBoxHandler} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* all products */}
      <section className="pt-0">
        <Container>
          <Row>
            {filteredProducts.length === 0 ? (
              <h1 className="text-center fs-4">
                Sản phẩm không được tìm thấy!
              </h1>
            ) : (
              <ProductList items={filteredProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export async function getStaticProps() {
  // Using the FileSystem
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: { destination: "/contact" },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }
  // End Using the FileSystem


  return {
    props: {
      allProducts: data.products,

    },
    revalidate: 60,
  };
}
export default Products;
