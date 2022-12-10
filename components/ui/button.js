import classes from "../ui/button.module.css";
import React, { Fragment } from "react";
import Link from "next/link";

const Button = (props) => {
  if (props.link) {
    return (
       <Fragment>
          <Link className={classes.btn} href={props.link}>
            {props.children}
          </Link>
       </Fragment>
    );
  }
  return (
    <Fragment>
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    </Fragment>
  );
};
export default Button;
