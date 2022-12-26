import {
  getAllProducts,
  getProductById,
  getProductByCategory,
} from "../../helpers/api-util";
import React, { Fragment, useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import Image from "next/image";
import { toast } from "react-toastify";

import CommonHero from "../../components/ui/common-hero";
import ProductList from "../../components/products/product-list";
import { motion } from "framer-motion";
import Button from "../../components/ui/button";
import classes from "../../styles/ProductDetail.module.css";
import StarIcon from "../../components/icons/star-icon";
import StarHalfIcon from "../../components/icons/star-half-icon";
import { useRouter } from "next/router";
import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

const ProductDetailPage = (props) => {
  const productById = props.selectedProduct;
  const productByCategory = props.categorizedProduct;

  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(0);
  const nameInputRef = useRef(null);
  const reviewMessageRef = useRef(null);

  useEffect(() => {
    setTab("desc");
  }, [productById]);

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
      <CommonHero title={productById.productName} />
      <section className={classes.productSection}>
        <Container>
          <Row>
            <Col lg="6" className="text-center">
              <Image
                src={`/${productById.image}`}
                width={500}
                height={500}
                alt={productById.productName}
              />
            </Col>
            <Col lg="6">
              <div className={classes.productDetail}>
                <h2>{productById.productName}</h2>
                <p className="mt-4">
                  <span className="me-3 fst-italic">Thương hiệu:</span>
                  {productById.brandName}
                </p>
                <p className="mt-2">
                  <span className="me-3 fst-italic">Xuất xứ:</span>
                  {productById.origin}
                </p>
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
                    Đánh giá mức <span>{productById.avgRating}</span>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className={classes.productPrice}>
                    {productById.price}&nbsp;vnđ
                  </span>
                  <p>
                    <span className="me-3 fst-italic">Danh mục:</span>
                    {productById.categoryVN.toUpperCase()}
                  </p>
                </div>
                <p className="mt-3">
                  <span className="me-3 fst-italic">
                    Trọng lượng/ Thể tích:
                  </span>
                  {productById.netWeight}
                </p>
                <p className="mt-2">
                  <span className="me-3 fst-italic">Điều kiện:</span>
                  {productById.condition}
                </p>
                <p className="mt-2">
                  <span className="me-3 fst-italic">Hạn sử dụng:</span>
                  {productById.expiryDate}
                </p>
                <p className="mt-2">
                  <span className="me-3 fst-italic">Ngày hết hạn:</span>
                  {productById.bestBefore}
                </p>
                <p className="mt-2">
                  <span className="me-3 fst-italic">Thành phần:</span>
                  {productById.ingridient}
                </p>
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
                  Đánh giá&nbsp;
                  {/* {productById.reviews.length} */}
                </h6>
              </div>
              {tab === "desc" ? (
                <div className={`${classes.tabContent} mt-5`}>
                  <p>{productById.description}</p>
                </div>
              ) : (
                <div className={`${classes.productReview} mt-5`}>
                  <div className={classes.reviewWrapper}>
                    <ul>
                      {props.selectedProduct.reviews ? (
                        productById.reviews.map((item) => (
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
            <ProductList items={productByCategory} />
          </Row>
        </Container>
      </section>
      ;
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const segmentProductId = params.productId; // dynamic segment: params.productId -> [productId].js
  // rút ngắn 2 dòng trên:
  // const segmentProductId = context.params.productById

  const product = await getProductById(segmentProductId);
  const productCategory = await getProductByCategory(product.category);

  return {
    props: {
      selectedProduct: product,
      categorizedProduct: productCategory,
    },
  };
}

export async function getStaticPaths() {
  const allProducts = await getAllProducts();
  const paths = allProducts.map((item) => ({
    params: { productId: item.id },
  }));

  return {
    paths: paths,
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
    /*
    paths: [
      { params: { productId: "cereal-muesli" } },
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
      { params: { productId: "wine-368" } },
      { params: { productId: "wine-568" } },
      { params: { productId: "wine-666" } },
      { params: { productId: "wine-888" } },
    ],
*/
    /** Fallback Pages */
    // fallback: true, // render pages even though it was not added to paths
    fallback: false // render 404 page if it was not added to paths
    // fallback: "blocking",
  };
}

export default ProductDetailPage;
