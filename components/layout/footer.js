import React, { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import MapIcon from "../icons/map-icon";
import PhoneIcon from "../icons/phone-icon";
import EmailIcon from "../icons/email-icon.js";
import classes from "./Footer.module.css";

const Footer = () => {
  const path = usePathname();
  const categories = [
    { path: "0", text: "Mật ong và siro" },
    { path: "1", text: "Dầu ăn" },
    { path: "2", text: "Nước có ga" },
    { path: "3", text: "Ngũ cốc" },
    { path: "4", text: "Thực phẩm khô" },
    { path: "5", text: "Các loại đậu sấy khô" },
    { path: "6", text: "Rượu" },
  ];
  const links = [
    { path: "/products", text: "Sản phẩm" },
    { path: "/blog", text: "Tin tức" },
    { path: "/contact", text: "Liên hệ" },
    { path: "/login", text: "Đăng nhập" },
    { path: "/faq", text: "Câu hỏi" },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <Col lg="6" xl="4" md="6" className={classes.companyName}>
            <motion.h1 whileTap={{ scale: 0.6 }}>
              <Link href={"/"}>Benison</Link>
            </motion.h1>
            <p className={classes.estYear}>Since 2020</p>
            <p className={`${classes.desc} mt-4`}>
              Uy Tín - Chất Lượng - Giá Tốt
            </p>
          </Col>
          <Col lg="3" xl="2" md="4" className="mt-5">
            <div className={classes.quickLinks}>
              <h4 className={classes.quickLinksTitle}>Danh mục</h4>
              <ListGroup className="mt-3 lh-lg">
                {categories.map((categoryItem) => (
                  <motion.ListGroupItem
                    whileHover={{ x: 10 }}
                    className={`${classes.linkItem} ps-0 border-0 bg-transparent`}
                    key={categoryItem.path}
                  >
                    <Link
                      className={`${
                        categoryItem.path === path
                          ? `${classes.linkActive}`
                          : ""
                      }`}
                      href={categoryItem.path}
                    >
                      {categoryItem.text}
                    </Link>
                  </motion.ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" xl="2" md="2" className="mt-5">
            <div className={classes.quickLinks}>
              <h4 className={classes.quickLinksTitle}>Liên kết</h4>
              <ListGroup className="mt-3 lh-lg">
                {links.map((menuItem) => (
                  <motion.ListGroupItem
                    whileHover={{ x: 10 }}
                    className={`${classes.linkItem} ps-0 border-0 bg-transparent`}
                    key={menuItem.path}
                  >
                    <Link
                      className={`${
                        menuItem.path === path ? `${classes.linkActive}` : ""
                      }`}
                      href={menuItem.path}
                    >
                      {menuItem.text}
                    </Link>
                  </motion.ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" xl="4" md="12" className="mt-5">
            <div className={classes.quickLinks}>
              <h4 className={classes.quickLinksTitle}>Liên hệ</h4>
              <ListGroup className="mt-3 lh-lg">
                <ListGroupItem className="ps-0 border-0 bg-transparent d-flex align-items-center gap-2">
                  <span className={classes.mapIcon}>
                    <MapIcon />
                  </span>
                  <p>
                    Số 59 Mạc Đỉnh Chi, Phường Đa Kao, Quận 1, Tp.Hồ Chí Minh,
                    Việt Nam
                  </p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 bg-transparent d-flex align-items-center gap-2">
                  <span className={classes.phoneIcon}>
                    <PhoneIcon />
                  </span>
                  <p>(+84)&nbsp;088&nbsp;9999&nbsp;527</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 bg-transparent d-flex align-items-center gap-2">
                  <span className={classes.emailIcon}>
                    <EmailIcon />
                  </span>
                  <p>infobenison.BNS@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" className={classes.copyRight}>
            Copyright&nbsp;&copy;&nbsp;{currentYear}&nbsp;
            <strong>BENISON</strong>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
