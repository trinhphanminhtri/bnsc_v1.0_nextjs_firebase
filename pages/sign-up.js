import React, { Fragment } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Head from "next/head";
import Link from "next/link";
import classes from "../styles/LoginSignup.module.css";
import Button from "../components/ui/button";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <Fragment>
      <Head>
        <title>Benison - Đăng nhập</title>
      </Head>
      <section className={classes.loginSection}>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Đăng ký</h3>
              <Form className={classes.authForm}>
                <FormGroup className={classes.inputForm}>
                  <input type="text" required placeholder="Họ tên" />
                </FormGroup>
                <FormGroup className={classes.inputForm}>
                  <input type="email" required placeholder="Email" />
                </FormGroup>
                <FormGroup className={classes.inputForm}>
                  <input type="password" required placeholder="Password" />
                </FormGroup>
                <FormGroup className={classes.inputForm}>
                  <input type="file" />
                </FormGroup>
                <Button className={classes.authBtn}>Đăng ký</Button>
                <p>
                  Bạn đã có tài khoản?&nbsp;
                  <Link href={"/login"} className="fw-semibold">
                    Đăng nhập ngay
                  </Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Signup;
