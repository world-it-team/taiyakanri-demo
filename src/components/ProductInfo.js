import React from 'react';
import data from "../data/productInfo.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    table: {
        width: "100%",
        margin: "auto",
        borderCollapse: "collapse",
        textAlign: "center",
        "& th, td": {
            border: "1px solid black",
        },
        "& th": {
            backgroundColor: "#e6f2f5",
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
    }
}));

function ProductInfo(props) {
    const classes = useStyles();
    return (
      <table className={classes.table}>
        <tr className={classes.title}>
          {data.productInfo.map((item, index) => (
            <td colSpan={data.productInfo.length === index + 1 ? 2 : 1}>
              {item.label}
            </td>
          ))}
        </tr>
        <tr>
          {data.productInfo.map((item, index) =>
            data.productInfo.length === index + 1 ? (
              <>
                <td className={classes.contentChild}>{item.content[0]}</td>
                <td>{item.content[1]}</td>
              </>
            ) : (
              <td>{item.content}</td>
            )
          )}
        </tr>
      </table>
    );
}

export default ProductInfo;