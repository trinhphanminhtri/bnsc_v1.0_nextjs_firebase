import Image from "next/image";
import { Fragment } from "react";
import {toast } from "react-toastify";
import classes from "./product-card.module.css";
import PlusIcon from "../icons/plus-icon";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import Link from "next/link";

const ProductCard = (props) => {
  const notify = () => toast.success('Sản phẩm được thêm vào giỏ hàng')
  const { id, productName, brandName, price, image } = props;
  return (
    <Fragment>
      <Col lg="3" md="4">
        <div className={classes.productCardItem}>
          <motion.div whileHover={{ scale: 0.9 }}>
            <Link href={`/products/${id}`}>
              <Image
                src={"/" + image}
                alt={productName}
                width={500}
                height={500}
                priority={true}
              />
            </Link>
          </motion.div>
          <div className={`${classes.productCardInfo} p-2`}>
            <h3 className={classes.productName}>{productName}</h3>
            <span className={classes.productBrandName}>{brandName}</span>
          </div>
          <div
            className={`${classes.productCardBottom} d-flex align-items-center justify-content-between p-2`}
          >
            <span className={classes.productCardPrice}>{price}&nbsp;vnđ</span>
            <motion.span whileTap={{ scale: 1.2 }} onClick={notify}>
              <PlusIcon />
            </motion.span>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default ProductCard;
