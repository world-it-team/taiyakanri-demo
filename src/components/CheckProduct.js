import React from "react";
import data from "../data/productInfo.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    margin: "10px auto 0px auto",
    borderCollapse: "collapse",
    textAlign: "center",
    "& td": {
      border: "1px solid black",
    },

    "& tr": {
      height: "30px",
    },
  },
  title: {
    backgroundColor: "#e6f2f5",
  },
}));

function CheckProduct(props) {
  const classes = useStyles();
  return (
    <table className={classes.table}>
      <tr className={classes.title}>
        <td>IN / OUT 組み換え</td>
        <td>アライメント</td>
        <td>充填空気圧確認</td>
        <td>パンク点検</td>
        <td>ホイール交換/修理</td>
      </tr>
      <tr>
        <td>{data.checkProductResult.recombinationIO}</td>
        <td>{data.checkProductResult.alignment}</td>
        <td>{data.checkProductResult.check}</td>
        <td>{data.checkProductResult.punctureIns}</td>
        <td>{data.checkProductResult.replacementOrRepair}</td>
      </tr>
    </table>
  );
}

export default CheckProduct;
