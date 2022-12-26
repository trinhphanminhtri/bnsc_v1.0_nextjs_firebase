import { getAllProducts } from "../../helpers/api";
import React, { Fragment, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import CommonHero from "../../components/ui/common-hero";
import ProductList from "../../components/products/product-list";
import { Container, Row, Col } from "reactstrap";
import SearchIcon from "../../components/icons/search-icon";
import classes from "../../styles/Products.module.css";

const Products = (props) => {
  const [productsFilter, setProductsFilter] = useState(props.allProducts);
  const [sortDescPrice, setSortDescPrice] = useState([]);

  const productsFilterHandler = (data) => {
    const filterData = data.target.value;
    if (filterData === "") {
      setProductsFilter(props.allProducts);
    }
    if (filterData === "honey") {
      const filteredProducts = props.allProducts.filter(
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
      const filteredProducts = props.allProducts.filter(
        (item) => item.category === "sparkling"
      );
      setProductsFilter(filteredProducts);
    }
    if (filterData === "cereal") {
      const filteredProducts = props.allProducts.filter(
        (item) => item.category === "cereal"
      );
      setProductsFilter(filteredProducts);
    }
    if (filterData === "driedfruit") {
      const filteredProducts = props.allProducts.filter(
        (item) => item.category === "driedfruit"
      );
      setProductsFilter(filteredProducts);
    }
    if (filterData === "nut") {
      const filteredProducts = props.allProducts.filter(
        (item) => item.category === "nut"
      );
      setProductsFilter(filteredProducts);
    }
    if (filterData === "wine") {
      const filteredProducts = props.allProducts.filter(
        (item) => item.category === "wine"
      );
      setProductsFilter(filteredProducts);
    }
  };
  const productsSearchHandler = (data) => {
    const searchText = data.target.value;
    const productsSearch = props.allProducts.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    setProductsFilter(productsSearch);
  };

  const sortPriceHandler = (data) => {
    const sortData = data.target.value;
    if (sortData === "ascending") {
      console.log("Sắp xếp tăng dần");
    }
    if (sortData === "descending") {
      console.log("Sắp xếp giảm dần");
    }
  };
  
  return (
    <Fragment>
      <Head>
        <title>Benison - Tất cả sản phẩm</title>
      </Head>
      <CommonHero title={"Sản phẩm"} />
      <section className={classes.filterSection}>
        <Container>
          <Row>
            <Col lg="3" md="6" sm="6">
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
            <Col lg="3" md="6" sm="6" className="text-end">
              <div className={classes.filterWidget}>
                {/* <select onChange={sortPriceHandler}> */}
                <select>
                  <option>Sắp sếp theo giá</option>
                  <option value="ascending">Giá tăng dần</option>
                  <option value="descending">Giá giảm dần</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className={classes.searchBox}>
                <input
                  type="text"
                  placeholder="Tìm sản phẩm"
                  onChange={productsSearchHandler}
                />
                <motion.span whileTap={{ scale: 1.2 }}>
                  <SearchIcon />
                </motion.span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsFilter.length === 0 ? (
              <h1 className="text-center fs-4">
                Sản phẩm không được tìm thấy!
              </h1>
            ) : (
              <ProductList items={productsFilter} />
            )}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      allProducts: products,
    },
    revalidate: 10,
    // notFound: true,
  };
}
export default Products;
