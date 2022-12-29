import classes from "../../components/products/product-search.module.css";

const ProductSearchByCategory = (props) => {
  const { functionHandler } = props;
  return (
    <div className={classes.filterWidget}>
      <select onChange={functionHandler}>
        <option value="">Tìm theo danh mục</option>
        <option value="honey">Mật ong và siro</option>
        <option value="oil">Dầu ăn</option>
        <option value="sparkling">Nước có ga</option>
        <option value="cereal">Ngũ cốc</option>
        <option value="driedfruit">Thực phẩm khô</option>
        <option value="nut">Các loại đậu sấy khô</option>
        <option value="wine">Rượu</option>
      </select>
    </div>
  );
};
export default ProductSearchByCategory;
