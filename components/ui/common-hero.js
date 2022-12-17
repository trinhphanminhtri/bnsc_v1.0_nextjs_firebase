import { Fragment } from "react";
import { Container } from "reactstrap";
import classes from "./common-hero.module.css";

const CommonHero = (props) => {
  return (
    <Fragment>
      <section className={classes.heroSection}>
        <Container className="text-center">
          <h1>{props.title}</h1>
        </Container>
      </section>
    </Fragment>
  );
};
export default CommonHero;
