import React from "react";
import { makeStyles } from "@material-ui/core";
import data from "../data/topTable.json";

const useStyles = makeStyles({
  table: {
    width: "95%",
    margin: "25px auto 0px auto",
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
});

function TopTable(props) {
  const classes = useStyles();
  return (
    <table className={classes.table}>
      <tr>
        {data.topTable.map((item, index) => (
          <th>{item.lable}</th>
        ))}
      </tr>
      <tr>
        {data.topTable.map((item, index) => (
          <td>{item.content}</td>
        ))}
      </tr>
    </table>
  );
}

export default TopTable;
