import { motion } from "framer-motion";
import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../services/Services.module.css";
import TruckIcon from "../../components/icons/truck-icon";
import UserGroupIcon from "../../components/icons/user-group-icon";
import GlobeAsiaAustralia from "../../components/icons/globe-asia-australia-icon";
import HeartIcon from "../../components/icons/heart-icon";
const Services = (props) => {
  return (
    <Fragment>
      <section className={classes.serviceSection}>
        <Container>
          <Row className="mt-1">
            {/* {props.map((item, index) => (
              <Col lg="3" md="6" key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={classes.serviceItem}
                  style={{ background: `${item.bg}` }}
                >
                  {item.icon}
                  <div className={classes.serviceContent}>
                    <h3>{props.title}</h3>
                    <p>{props.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            ))} */}
            <Col lg="3" md="6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={classes.serviceItem}
                style={{ background: `#e984a2` }}
              >
                <TruckIcon />
                <div className={classes.serviceContent}>
                  <h3>Giao hàng nhanh</h3>
                  <p>Dịch vụ chuyên nghiệp</p>
                </div>
              </motion.div>
            </Col>
            <Col lg="3" md="6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={classes.serviceItem}
                style={{ background: `#b9cc95` }}
              >
                <UserGroupIcon />
                <div className={classes.serviceContent}>
                  <h3>Tư vấn 24/7</h3>
                  <p>Năng động - Sáng tạo</p>
                </div>
              </motion.div>
            </Col>
            <Col lg="3" md="6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={classes.serviceItem}
                style={{ background: `#f8d49b` }}
              >
                <GlobeAsiaAustralia />
                <div className={classes.serviceContent}>
                  <h3>Hàng nhập khẩu</h3>
                  <p>Nguồn hàng từ nước Úc</p>
                </div>
              </motion.div>
            </Col>
            <Col lg="3" md="6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={classes.serviceItem}
                style={{ background: `#F6E6BC` }}
              >
                <HeartIcon />
                <div className={classes.serviceContent}>
                  <h3>Tốt cho sức khỏe</h3>
                  <p>Giá trị dinh dưỡng cao</p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Services;
