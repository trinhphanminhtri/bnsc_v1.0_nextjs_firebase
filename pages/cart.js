import React, { Fragment } from "react";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
const Cart = () => {
  return (
    <Fragment>
      <Head>
        <title>Benison - Giỏ hàng</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <h1>Hello Cart</h1>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Cart;
