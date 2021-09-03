import React from 'react';
import data from "../data/productInfo.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    table: {
        width: "100%",
        margin: "auto",
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
    contentChild: {
        backgroundColor: "#ff0000",
    },

}));

function ProductInfo(props) {
    const classes = useStyles();
    return (
      <table className={classes.table}>
        <tr className={classes.title}>
          <td>検索実施日</td>
          <td>ステータス</td>
          <td>タイヤ種別</td>
          <td>ホイール</td>
          <td>ランフラッド</td>
          <td colSpan="2">経過年数</td>
        </tr>
        <tr>
          <td>{data.productInfo.searchDate}</td>
          <td>{data.productInfo.status}</td>
          <td>{data.productInfo.tireType}</td>
          <td>{data.productInfo.wheel}</td>
          <td>{data.productInfo.runFlood}</td>
          <td className={classes.contentChild}>
            {data.productInfo.recommended}
          </td>
          <td>{data.productInfo.usedTime}</td>
        </tr>
      </table>
    );
}

export default ProductInfo;