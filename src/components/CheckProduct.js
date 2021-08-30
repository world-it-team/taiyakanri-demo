import React from "react";
import data from "../data/testProduct.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    margin: "10px auto 0px auto",
    borderCollapse: "collapse",
    "& th, td": {
      border: "1px solid black",
    },
    "& th": {
      fontWeight: "normal",
      backgroundColor: "#e6f2f5",
    },
    "& tr": {
      height: "30px",
    },
    textAlign: "center",
  },
}));

function CheckProduct(props) {
  const classes = useStyles();
  return (
    <table className={classes.table}>
      <tr>
        {data.testProduct.map((item, index) => (
          <th>{item.label}</th>
        ))}
      </tr>
      <tr>
        {data.testProduct.map((item, index) => (
          <td>{item.content}</td>
        ))}
      </tr>
    </table>
  );
}

export default CheckProduct;
