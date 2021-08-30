import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    table: {
        margin: "auto",
        borderCollapse: "collapse",
        "& th, td": {
            border: "1px solid black",
        },
        "& th": {
            backgroundColor: "#e6f2f5",
        },
        "& tr": {
            backgroundColor: "#ff0000",
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
                <td>即交換</td>
            </tr>
        </table>
    );
}

export default Judgement;