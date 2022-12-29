import { motion } from "framer-motion";
import { Container, Row, Col } from "reactstrap";
import classes from "../../components/products/product-search.module.css";

const ProductSearchByCategory = (props) => {
  const {functionHandler } = props;
  return (
    <div className={classes.filterWidget}>
      <select onChange={functionHandler}>
        <option value="">Sắp sếp theo giá</option>
        <option value="ascending">Giá tăng dần</option>
        <option value="descending">Giá giảm dần</option>
      </select>
    </div>
  );
};
export default ProductSearchByCategory;
