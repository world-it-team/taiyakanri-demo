import React from 'react';
import data from "../data/productInfo.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    margin: "auto",
    borderCollapse: "collapse",
    "& th, td": {
      border: "1px solid black",
    },
    "& th": {
      backgroundColor: "#e6f2f5",
    },
    "& tr": {
      height: "30px",
    },
    textAlign: "center",
  },
}));

function ProductInfo(props) {
  const classes = useStyles();
  return (
    <table className={classes.table}>
      <tr>
        <td>{data.productInfo[0].label}</td>
        <td>{data.productInfo[1].label}</td>
        <td>{data.productInfo[2].label}</td>
        <td>{data.productInfo[3].label}</td>
        <td>{data.productInfo[4].label}</td>
        <td colSpan={2}>{data.productInfo[5].label}</td>
      </tr>
      <tr>
        <td>{data.productInfo[0].content}</td>
        <td>{data.productInfo[1].content}</td>
        <td>{data.productInfo[2].content}</td>
        <td>{data.productInfo[3].content}</td>
        <td>{data.productInfo[4].content}</td>
        <td>{data.productInfo[5].content[0]}</td>
        <td>{data.productInfo[5].content[1]}</td>
      </tr>
    </table>
  );
}

export default ProductInfo;