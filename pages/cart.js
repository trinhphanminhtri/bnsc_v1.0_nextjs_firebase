import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import CommonHero from "../components/ui/common-hero";
import { getAllProducts } from "../data/products-data";
import TrashIcon from "../components/icons/trash-icon";
import Button from "../components/ui/button";
import classes from "../styles/Cart.module.css";

const Cart = () => {
  const allProducts = getAllProducts();
  return (
    <Fragment>
      <Head>
        <title>Benison - Giỏ hàng</title>
      </Head>
      <CommonHero title={"Giỏ Hàng"} />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              <table className={`table ${classes.tableCart}`}>
                <thead>
                  <tr>
                    <th>Hình</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá tiền (vnd)</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <Image
                        src={"/images/products/honey/kid-honey.jpg"}
                        width={80}
                        height={80}
                        alt="kid honey"
                      />
                    </th>
                    <td>Mật ong trẻ em</td>
                    <td>1</td>
                    <td>490000</td>
                    <motion.td whileTap={{ scale: 1.2 }}>
                      <TrashIcon />
                    </motion.td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>
                      <Image
                        src={"/images/products/sparkling/sparkling-dark.jpg"}
                        width={80}
                        height={80}
                        alt="kid honey"
                      />
                    </th>
                    <td>Mật ong trẻ em</td>
                    <td>1</td>
                    <td>490000</td>
                    <motion.td whileTap={{ scale: 1.2 }}>
                      <TrashIcon />
                    </motion.td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>
                      <Image
                        src={
                          "/images/products/fruit-toasted/toasted-grapes.jpg"
                        }
                        width={80}
                        height={80}
                        alt="kid honey"
                      />
                    </th>
                    <td>Mật ong trẻ em</td>
                    <td>1</td>
                    <td>490000</td>
                    <motion.td whileTap={{ scale: 1.2 }}>
                      <TrashIcon />
                    </motion.td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th>
                      <Image
                        src={"/images/products/wine/barossa-valley-666.jpg"}
                        width={80}
                        height={80}
                        alt="kid honey"
                      />
                    </th>
                    <td>Mật ong trẻ em</td>
                    <td>1</td>
                    <td>490000</td>
                    <motion.td whileTap={{ scale: 1.2 }}>
                      <TrashIcon />
                    </motion.td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col lg="3">
              <h6 className="d-flex align-items-center justify-content-between fs-4 fw-bold">
                Hóa đơn
                <span className="fs-4 fw-semibold">$$$&nbsp;vnđ</span>
              </h6>
              <p>Tiền vận chuyển sẽ được cộng vào sau khi mua hàng</p>
              <Button link={"/check-out"}>Thanh toán mua hàng</Button>
              <Button link={"/products"}>Tiếp tục xem Sản phẩm</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Cart;
