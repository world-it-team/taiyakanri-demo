import React from "react";
import ProductInfo from "./ProductInfo";
import CheckProduct from "./CheckProduct";
import Judgement from "./Judgement";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "95%",
    display: "flex",
    margin: "10px auto 0px auto",
  },
  left: { width: "88%" },
  right: { width: "10%", float: "right" },
});

function MiddleTable(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <ProductInfo />
        <CheckProduct />
      </div>
      <div className={classes.right}>
        <Judgement />
      </div>
    </div>
  );
}

export default MiddleTable;
