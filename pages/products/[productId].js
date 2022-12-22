import fs from "fs/promises";
import path from "path";

import React, { Fragment, useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { toast } from "react-toastify";

import { getAllProducts, getProductsById } from "../../data/products-data";
import CommonHero from "../../components/ui/common-hero";
import ProductList from "../../components/products/product-list";
import { motion } from "framer-motion";
import Button from "../../components/ui/button";
import classes from "../../styles/ProductDetail.module.css";
import StarIcon from "../../components/icons/star-icon";
import StarHalfIcon from "../../components/icons/star-half-icon";

const ProductDetail = (props) => {
  const { loadedProduct, productCategory } = props;

  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(0);
  const nameInputRef = useRef(null);
  const reviewMessageRef = useRef(null);

  useEffect(() => {
    setTab("desc");
  }, [loadedProduct]);

  if (!loadedProduct) {
    return <h1 className="text-center fs-4 py-5">Không tìm thấy sản phẩm!</h1>;
  }

  const tabDescriptionHandler = () => setTab("desc");
  const tabReviewHandler = () => setTab("rev");
  // id, category, productName, brandName, price, image, origin, netWeight, condition, avgRating, reviews, description, newArrivals

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredReviewMessage = reviewMessageRef.current.value;

    // Test
    const reviewsData = {
      name: enteredName,
      reviewContent: enteredReviewMessage,
      rating: rating,
    };
    // console.log(reviewsData);
    props.addReviews(reviewsData);
  };

  const addToCart = () => {
    toast.success("Sản phẩm được thêm vào giỏ hàng");
  };

  return (
    <Fragment>
      <Head>
        <title>Benison - Chi tiết sản phẩm</title>
      </Head>

      <CommonHero title={loadedProduct.productName} />

      <section className={classes.productSection}>
        <Container>
          <Row>
            <Col lg="6" className="text-center">
              <Image
                src={`/${loadedProduct.image}`}
                width={500}
                height={500}
                alt={loadedProduct.productName}
              />
            </Col>
            <Col lg="6">
              <div className={classes.productDetail}>
                <h2>{loadedProduct.productName}</h2>
                <p className="mt-3">{loadedProduct.brandName}</p>
                <p className="mt-0">{loadedProduct.origin}</p>
                <div
                  className={`${classes.productRating} d-flex align-items-center gap-5 mt-3 mb-4`}
                >
                  <span>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                  </span>
                  <p>
                    Đánh giá mức <span>{loadedProduct.avgRating}</span>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className={classes.productPrice}>
                    {loadedProduct.price}&nbsp;vnđ
                  </span>
                  <p>Danh mục:&nbsp;{loadedProduct.categoryVN.toUpperCase()}</p>
                </div>
                <p className="mt-3">{loadedProduct.netWeight}</p>
                <p className="mt-0">{loadedProduct.condition}</p>
              </div>
              <Button onClick={addToCart}>Thêm vào giỏ hàng</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div
                className={`${classes.tabWrapper} d-flex align-items-center gap-5`}
              >
                <h6
                  className={`${tab === "desc" ? classes.activeTab : ""}`}
                  onClick={tabDescriptionHandler}
                >
                  Mô tả sản phẩm
                </h6>
                <h6
                  className={`${tab === "rev" ? classes.activeTab : ""}`}
                  onClick={tabReviewHandler}
                >
                  Đánh giá&nbsp;{loadedProduct.reviews.length}
                </h6>
              </div>
              {tab === "desc" ? (
                <div className={`${classes.tabContent} mt-5`}>
                  <p>{loadedProduct.description}</p>
                </div>
              ) : (
                <div className={`${classes.productReview} mt-5`}>
                  <div className={classes.reviewWrapper}>
                    <ul>
                      {loadedProduct.reviews ? (
                        loadedProduct.reviews.map((item) => (
                          <li key={item.name} className="mb-4">
                            <h6>{item.name}</h6>
                            <span>{item.reviewRating}&nbsp;(mức đánh giá)</span>
                            <p>{item.reviewContent}</p>
                          </li>
                        ))
                      ) : (
                        <p>No reviews</p>
                      )}
                    </ul>
                    <div className={classes.reviewForm}>
                      <h4>Đánh giá người dùng</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className={classes.formGroup}>
                          <input
                            type="text"
                            placeholder="Nhập tên"
                            required
                            ref={nameInputRef}
                          />
                        </div>
                        <div
                          className={`${classes.formGroup} d-flex align-items-center gap-3`}
                        >
                          <span onClick={() => setRating(1)}>
                            1.
                            <motion.span whileTap={{ scale: 1.2 }}>
                              <StarIcon />
                            </motion.span>
                          </span>
                          <span onClick={() => setRating(2)}>
                            2.
                            <motion.span whileTap={{ scale: 1.2 }}>
                              <StarIcon />
                            </motion.span>
                          </span>
                          <span onClick={() => setRating(3)}>
                            3.
                            <motion.span whileTap={{ scale: 1.2 }}>
                              <StarIcon />
                            </motion.span>
                          </span>
                          <span onClick={() => setRating(4)}>
                            4.
                            <motion.span whileTap={{ scale: 1.2 }}>
                              <StarIcon />
                            </motion.span>
                          </span>
                          <span onClick={() => setRating(5)}>
                            5.
                            <motion.span whileTap={{ scale: 1.2 }}>
                              <StarIcon />
                            </motion.span>
                          </span>
                        </div>
                        <div className={classes.formGroup}>
                          <textarea
                            row={4}
                            type="text"
                            placeholder="Đánh giá sản phẩm"
                            required
                            ref={reviewMessageRef}
                          />
                        </div>
                        <Button>Gửi</Button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className={classes.relatedTitle}>
                Những sản phẩm cùng danh mục
              </h2>
            </Col>
            <ProductList items={productCategory} />
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const paramsProductId = params.productId; // dynamic segment

  const filePath = path.join(process.cwd(), "data", "products-data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((item) => item.id === paramsProductId);
  const productCategory = data.products.filter(
    (item) => item.category === product.category
  );
  return {
    props: {
      loadedProduct: product,
      productCategory: productCategory,
    },
  };
}

export async function getStaticPaths() {
  return {
    /*
    paths: [
      "/products/cereal-muesli",
      "/products/driedfruit-grapes",
      "/products/honey-kid",
      "/products/honey-mallee",
      "/products/honey-meadow",
      "/products/honey-orange",
      "/products/oil-250",
      "/products/oil-500",
      "/products/oil-750",
      "/products/sparkling-1068",
      "/products/sparkling-1079",
      "/products/wine-368",
      "/products/wine-568",
      "/products/wine-666",
      "/products/wine-888",
    ],
    */
    paths: [
     /* { params: { productId: "cereal-muesli" } },
      { params: { productId: "driedfruit-grapes" } },
      { params: { productId: "honey-kid" } },
      { params: { productId: "honey-mallee" } },
      { params: { productId: "honey-meadow" } },
      { params: { productId: "honey-orange" } },
      { params: { productId: "oil-250" } },
      { params: { productId: "oil-500" } },
      { params: { productId: "oil-750" } },
      { params: { productId: "sparkling-1068" } },
      { params: { productId: "sparkling-1079" } },
      */
      { params: { productId: "wine-368" } },
      { params: { productId: "wine-568" } },
      { params: { productId: "wine-666" } },
      { params: { productId: "wine-888" } },
    ],

    /** Fallback Pages */
    // fallback: true, // render pages even though it was not added to paths
    //fallback: false, // render 404 page if it was not added to paths
    fallback: "blocking",
  };

}

export default ProductDetail;
