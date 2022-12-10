import Image from "next/image";
import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../discount/banner.module.css";
import Clock from "../ui/clock";
import Button from "../ui/button";

const Banner = () => {
  return (
    <section className={`${classes.banner} d-flex align-items-center`}>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6">
            <div className={classes.clockText}>
              <h4 className="fs-4 mb-2">Lễ hội mua sắp</h4>
              <h3 className="fs-1 mb-3">Giảm giá Mùa Giáng Sinh</h3>
              <p>30%</p>
            <Clock />
            <Button link="/products">Mua ngay</Button>
            </div>
          </Col>
          <Col lg="6" md="6" className="p-4">
            <Image
              src={"/images/banners/merry-christmas.jpg"}
              width={300}
              height={200}
              alt="discount"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
