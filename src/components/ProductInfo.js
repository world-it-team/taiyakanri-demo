import React from 'react';
import data from "../data/productInfo.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    table: {
        width: "95%",
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
                {data.productInfo.map((item, index) => (
                    <th>{item.label}</th>
                ))}
            </tr>
            <tr>
                {data.productInfo.map((item, index) => (
                    <td>{item.content}</td>
                ))}
            </tr>
        </table>
    );
}

export default ProductInfo;