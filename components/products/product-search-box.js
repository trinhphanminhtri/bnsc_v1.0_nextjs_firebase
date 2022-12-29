import { motion } from "framer-motion";
import SearchIcon from "../icons/search-icon";
import classes from "../../components/products/product-search.module.css";

const ProductSearchByCategory = (props) => {
  const { functionHandler } = props;
  return (
    <div className={classes.searchBox}>
      <input
        type="text"
        placeholder="Tìm sản phẩm"
        onChange={functionHandler}
      />
      <motion.span whileTap={{ scale: 1.2 }}>
        <SearchIcon />
      </motion.span>
    </div>
  );
};
export default ProductSearchByCategory;
