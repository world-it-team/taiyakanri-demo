import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "20px 0px 10px 0px",
  },
  table: {
    textAlign: "center",
    width: "100%",
    borderCollapse: "collapse",
    "& td,tr,th": {
      border: "1px solid #333",
      fontWeight: "normal",
    },
  },
  row1col1: {
    backgroundColor: "#aee3f1",
    width: "8%",
  },
  row1col2: {
    backgroundColor: "#aee3f1",
    width: "29%",
  },
  row3header: {
    writingMode: "vertical-rl",
    textOrientation: "upright",
    backgroundColor: "#aee3f1",
    width: "8%",
  },
  row3th: {
    backgroundColor: "#aee3f1",
    width: "29%",
  },
  row3td1: {
    backgroundColor: "red",
    width: "17%",
  },
  row3td: {
    width: "17%",
  },
  row7header: {
    writingMode: "vertical-rl",
    textOrientation: "upright",
    backgroundColor: "#0bbc4d40",
    width: "8%",
  },
  row7th: {
    backgroundColor: "#0bbc4d40",
    width: "29%",
  },
  row7td1: {
    backgroundColor: "orange",
    width: "17%",
  },
  row7td: {
    width: "17%",
  },
  comment: {
    backgroundColor: "#aba7a74d",
  },
});
function TireTable(props) {
  const data = props.tireInfo;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <table className={classes.table}>
        <tr>
          <th rowSpan={2} className={classes.row1col1}>
            {data.number}
          </th>
          <th className={classes.row1col2}>{data.tireInfo.label}</th>
          <td colSpan={3}>{data.tireInfo.content}</td>
        </tr>
        <tr>
          <th className={classes.row1col2}>{data.maker.label}</th>
          <td colSpan={3}>{data.maker.content}</td>
        </tr>
        <tr>
          <th rowSpan={4} className={classes.row3header}>
            {data.measurement.label}
          </th>
          <th className={classes.row3th}>
            {data.measurement.content[0].item[0]}
          </th>
          <td className={classes.row3td1}>
            {data.measurement.content[0].item[1]}
          </td>
          <th className={classes.row3th}>
            {data.measurement.content[1].item[0]}
          </th>
          <td className={classes.row3td}>
            {data.measurement.content[1].item[1]}
          </td>
        </tr>
        <tr>
          <th className={classes.row3th}>
            {data.measurement.content[2].item[0]}
          </th>
          <td>{data.measurement.content[2].item[1]}</td>
          <th className={classes.row3th}>
            {data.measurement.content[3].item[0]}
          </th>
          <td>{data.measurement.content[3].item[1]}</td>
        </tr>
        <tr>
          <th className={classes.row3th}>
            {data.measurement.content[4].item[0]}
          </th>
          <td>{data.measurement.content[4].item[1]}</td>
          <th className={classes.row3th}>
            {data.measurement.content[5].item[0]}
          </th>
          <td>{data.measurement.content[5].item[1]}</td>
        </tr>
        <tr>
          <th className={classes.row3th}>
            {data.measurement.content[6].item[0]}
          </th>
          <td>{data.measurement.content[6].item[1]}</td>
          <th colSpan={2}></th>
        </tr>
        <tr>
          <th rowSpan={5} className={classes.row7header}>
            {data.status.label}
          </th>
          <th className={classes.row7th}>{data.status.content[0].item[0]}</th>
          <td className={classes.row7td1}>{data.status.content[0].item[1]}</td>
          <th className={classes.row7th}>{data.status.content[1].item[0]}</th>
          <td className={classes.row7td}>{data.status.content[1].item[1]}</td>
        </tr>
        <tr>
          <th className={classes.row7th}>{data.status.content[2].item[0]}</th>
          <td>{data.status.content[2].item[1]}</td>
          <th className={classes.row7th}>{data.status.content[3].item[0]}</th>
          <td>{data.status.content[3].item[1]}</td>
        </tr>
        <tr>
          <th className={classes.row7th}>{data.status.content[4].item[0]}</th>
          <td>{data.status.content[5].item[1]}</td>
          <th className={classes.row7th}>{data.status.content[5].item[0]}</th>
          <td>{data.status.content[5].item[1]}</td>
        </tr>
        <tr>
          <th className={classes.row7th}>{data.status.content[6].item[0]}</th>
          <td>{data.status.content[6].item[1]}</td>
          <th className={classes.row7th}>{data.status.content[7].item[0]}</th>
          <td>{data.status.content[7].item[1]}</td>
        </tr>
        <tr>
          <th className={classes.row7th}>{data.status.content[8].item[0]}</th>
          <td>{data.status.content[8].item[1]}</td>
          <th colSpan={2}></th>
        </tr>
        <tr>
          <th colSpan={2} className={classes.comment}>
            {data.comment.label}
          </th>
          <th colSpan={3}>{data.comment.content}</th>
        </tr>
      </table>
    </div>
  );
}

export default TireTable;
