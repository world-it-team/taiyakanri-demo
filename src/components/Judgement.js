import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import data from "../data/productInfo.json";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    height: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
    "& tr:first-child": {
      height: "23%",
    },
    "& th, td": {
      border: "1px solid black",
      fontWeight: "normal",
    },
    "& th": {
      backgroundColor: "#e6f2f5",
    },
    "& td": {
      backgroundColor: "#ff0000",
      fontWeight: "bold",
      fontSize: "20px",
    },
  },
}));

function Judgement(props) {
  const classes = useStyles();
  return (
    <table className={classes.table}>
      <tr>
        <th>タイヤ交換判定 </th>
      </tr>
      <tr>
        <td>{data.checkProductResult.judgement}</td>
      </tr>
    </table>
  );
}

export default Judgement;