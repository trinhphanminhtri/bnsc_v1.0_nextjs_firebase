import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import Image from "next/image";

import classes from "./hero.module.css";
import Button from "../ui/button";

const Hero = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className={classes.heroSection}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={classes.heroContent}>
              <p className={classes.heroSubtitle}>
                Những sản phẩm tốt cho sức khỏe năm {currentYear}
              </p>
              <h2>Hãy chọn những sản phẩm dinh dưỡng & chất lượng tốt</h2>
              <p className={classes.heroDesc}>
                Tất cả sản phẩm của <strong>BENISON</strong> đều được nhập khẩu
                chính ngạch từ nước Úc. Sản phẩm có nguồn gốc xuất xứ rõ ràng,
                được sản xuất với nguồn nguyên liệu hữu cơ an toàn và đạt tiêu
                chuẩn chất lượng.
              </p>
              <Button link={"/products"}>{"Mua ngay"}</Button>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Image
              src="/images/hero-img.png"
              priority={true}
              width={575}
              height={434}
              alt="benison"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
