import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    margin: "auto",
    borderCollapse: "collapse",
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
    textAlign: "center",
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
        <td rowSpan={3}>即交換</td>
      </tr>
    </table>
  );
}

export default Judgement;