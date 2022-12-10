import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../ui/title.module.css";
const Title = (props) => {
  return (
    <Fragment>
      <section className={classes.titleSection}>
        <Container>
          <Row>
            <Col lg="12" className={classes.titleCenter}>
              <h2 className={classes.title}>{props.title}</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Title;
