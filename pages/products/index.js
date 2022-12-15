import React, { Fragment, useState } from "react";
import Head from "next/head";
import Hero from "../../components/ui/hero";
import ProductList from "../../components/products/product-list";
import { Container, Row, Col } from "reactstrap";
import { getAllProducts } from "../../data/products-data";
import SearchIcon from "../../components/icons/search-icon";
import classes from "../../styles/Products.module.css";
import { motion } from "framer-motion";
const Products = () => {
  const allProducts = getAllProducts();
  const [productsFilter, setProductsFilter] = useState(allProducts);

  const productsFilterHandler = (data) => {
    const filterData = data.target.value;
    if (filterData === "") {
      setProductsFilter(allProducts);
    }
    if (filterData === "honey") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "honey"
      );
      setProductsFilter(filteredProducts);
    }
    if (filterData === "oil") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "oil"
      );
      setProductsFilter(filteredProducts);
    }
    if (filterData === "sparkling") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "sparkling"
      );
      setProductsFilter(filteredProducts);
    }
    if (filterData === "cereal") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "cereal"
      );
      setProductsFilter(filteredProducts);
    }
    if (filterData === "driedfruit") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "driedfruit"
      );
      setProductsFilter(filteredProducts);
    }
    if (filterData === "nut") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "nut"
      );
      setProductsFilter(filteredProducts);
    }
    if (filterData === "wine") {
      const filteredProducts = allProducts.filter(
        (item) => item.category === "wine"
      );
      setProductsFilter(filteredProducts);
    }
  };
  return (
    <Fragment>
      <Head>
        <title>Benison - Tất cả sản phẩm</title>
      </Head>
      <Hero title={"Sản phẩm"} />
      <section className={classes.filterSection}>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className={classes.filterWidget}>
                <select onChange={productsFilterHandler}>
                  <option value="">Tìm theo danh mục</option>
                  <option value="honey">Mật ong và siro</option>
                  <option value="oil">Dầu ăn</option>
                  <option value="sparkling">Nước có ga</option>
                  <option value="cereal">Ngũ cốc</option>
                  <option value="driedfruit">Thực phẩm khô</option>
                  <option value="nut">Các loại đậu sấy khô</option>
                  <option value="wine">Rượu</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className={classes.filterWidget}>
                <select>
                  <option>Sắp sếp theo giá</option>
                  <option value="">Giá tăng dần</option>
                  <option value="">Giá giảm dần</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className={classes.searchBox}>
                <input type="text" placeholder="Tìm sản phẩm" />
                <motion.span whileTap={{ scale: 1.2 }}>
                  <SearchIcon />
                </motion.span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {productsFilter.length=== 0 ? (<h1>Sản phẩm không tồn tại!</h1>) : <ProductList items={productsFilter} />}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Products;
