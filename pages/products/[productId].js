import React, { Fragment, useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { getAllProducts, getProductsById } from "../../data/products-data";
import CommonHero from "../../components/ui/common-hero";
import ProductList from "../../components/products/product-list";
import { motion } from "framer-motion";
import Button from "../../components/ui/button";
import classes from "../../styles/ProductDetail.module.css";
import StarIcon from "../../components/icons/star-icon";
import StarHalfIcon from "../../components/icons/star-half-icon";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(0);
  const nameInputRef = useRef(null);
  const reviewMessageRef = useRef();
  const allProducts = getAllProducts();

  const router = useRouter();
  const segmentProductId = router.query.productId;
  const product = getProductsById(segmentProductId);
  if (!product) {
    return <h1 className="text-center fs-4 py-5">Không tìm thấy sản phẩm!</h1>;
  }

  const tabDescriptionHandler = () => setTab("desc");
  const tabReviewHandler = () => setTab("rev");
  // id, category, productName, brandName, price, image, origin, netWeight, condition, avgRating, reviews, description, newArrivals

  const relatedProducts = allProducts.filter(
    (item) => item.category === product.category
  );

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredReviewMessage = reviewMessageRef.current.value;

    // Test
    const reviews = {
      name: enteredName,
      reviewContent: enteredReviewMessage,
      rating: rating,
    };
    console.log(reviews);
  };

  const addToCart = () => {
    toast.success("Sản phẩm được thêm vào giỏ hàng");
  };
 
  return (
    <Fragment>
      <Head>
        <title>Benison - Chi tiết sản phẩm</title>
      </Head>
      <CommonHero title={product.productName} />

      <section className={classes.productSection}>
        <Container>
          <Row>
            <Col lg="6" className="text-center">
              <Image
                src={`/${product.image}`}
                width={500}
                height={500}
                alt={product.productName}
              />
            </Col>
            <Col lg="6">
              <div className={classes.productDetail}>
                <h2>{product.productName}</h2>
                <p className="mt-3">{product.brandName}</p>
                <p className="mt-0">{product.origin}</p>
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
                    Đánh giá mức <span>{product.avgRating}</span>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className={classes.productPrice}>
                    {product.price}&nbsp;vnđ
                  </span>
                  <p>
                    Danh mục:<strong>{product.categoryVN.toUpperCase()}</strong>
                  </p>
                </div>
                <p className="mt-3">{product.netWeight}</p>
                <p className="mt-0">{product.condition}</p>
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
                  Đánh giá&nbsp;({product.reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className={`${classes.tabContent} mt-5`}>
                  <p>{product.description}</p>
                </div>
              ) : (
                <div className={`${classes.productReview} mt-5`}>
                  <div className={classes.reviewWrapper}>
                    <ul>
                      {product.reviews ? (
                        product.reviews.map((item) => (
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
            <ProductList items={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ProductDetail;
