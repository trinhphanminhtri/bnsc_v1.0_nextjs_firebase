import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import ProductCard from "../products/product-card";
import classes from "../products/product-list.module.css";

const ProductList = (props) => {
  const { items } = props;
  return (
    <Fragment>
      <section className={classes.productList}>
        <Container>
          <Row>
              {items.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  productName={item.productName}
                  brandName={item.brandName}
                  price={item.price}
                  image={item.image}
                />
              ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ProductList;
