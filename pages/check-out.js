import React, { Fragment } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Head from "next/head";
import classes from "../styles/checkout.module.css";
import CommonHero from "../components/ui/common-hero";
import Button from "../components/ui/button";

const Checkout = () => {
  return (
    <Fragment>
      <Head>
        <title>Benison - Kiểm hàng</title>
      </Head>
      <CommonHero title={"Thanh toán mua hàng"} />;
      <section className={classes.checkoutSection}>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold fs-4">Thông tin hóa đơn</h6>
              <Form className={classes.billingForm}>
                <FormGroup className={classes.inputForm}>
                  <input type="text" required placeholder="Họ tên" />
                </FormGroup>
                <FormGroup className={classes.inputForm}>
                  <input type="email" required placeholder="Email" />
                </FormGroup>
                <FormGroup className={classes.inputForm}>
                  <input type="number" required placeholder="Số điện thoại" />
                </FormGroup>
                <FormGroup className={classes.inputForm}>
                  <input type="text" required placeholder="Địa chỉ giao hàng" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4" className="text-center">
              <div className={classes.checkoutCart}>
                <h6>
                  Tổng sản phẩm:<span>100</span>
                </h6>
                <h6>
                  Tổng tiền:<span>1000000&nbsp;vnđ</span>
                </h6>
                <h6>
                  <span>Vận chuyển:<br/>(miễn phí)</span><span>0&nbsp;vnđ</span>
                </h6>
                <h4>
                  Thành tiền:<span>1000000&nbsp;vnđ</span>
                </h4>
              </div>
              <Button>Gửi thông tin đặt hàng</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Checkout;
