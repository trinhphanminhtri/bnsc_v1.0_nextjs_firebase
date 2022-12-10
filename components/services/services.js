import { motion } from "framer-motion";
import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../services/Services.module.css";

const Services = (props) => {
  const { items } = props;
  return (
    <Fragment>
      <section className={classes.serviceSection}>
        <Container>
          <Row className="mt-1">
            {items.map((item, index) => (
              <Col lg="3" md="6" key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={classes.serviceItem}
                  style={{ background: `${item.bg}` }}
                >
                  {item.icon}
                  <div className={classes.serviceContent}>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Services;
