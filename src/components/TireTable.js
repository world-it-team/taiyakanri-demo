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
          <th className={classes.row1col2}>タイヤ情報</th>
          <td colSpan={3}>{data.tireInfomation}</td>
        </tr>
        <tr>
          <th className={classes.row1col2}>メーカー/製造年</th>
          <td colSpan={3}>{data.makerVersion}</td>
        </tr>
        <tr>
          <th rowSpan={4} className={classes.row3header}>
            測定
          </th>
          <th className={classes.row3th}>タイヤ交換判定</th>
          <td
            className={
              data.measurement.tireReplaceJdg === "即交換"
                ? classes.row3td1
                : classes.row3td
            }
          >
            {data.measurement.tireReplaceJdg}
          </td>
          <th className={classes.row3th}>製造年数判定</th>
          <td className={classes.row3td}>{data.measurement.yearManufacJdg}</td>
        </tr>
        <tr>
          <th className={classes.row3th}>IN/OUT 組み換え</th>
          <td className={classes.row3td}>{data.measurement.recombinIO}</td>
          <th className={classes.row3th}>パンク点検</th>
          <td className={classes.row3td}>{data.measurement.punctureInsp}</td>
        </tr>
        <tr>
          <th className={classes.row3th}>アライメント</th>
          <td className={classes.row3td}>{data.measurement.alignment}</td>
          <th className={classes.row3th}>ホイール交換/修理</th>
          <td className={classes.row3td}>{data.measurement.wheelReplace}</td>
        </tr>
        <tr>
          <th className={classes.row3th}>充填空気圧確認</th>
          <td className={classes.row3td}>{data.measurement.checkFillAir}</td>
          <th colSpan={2}></th>
        </tr>
        <tr>
          <th rowSpan={5} className={classes.row7header}>
            状態
          </th>
          <th className={classes.row7th}>残溝</th>
          <td className={classes.row7td1}>{data.status.remainGroove}</td>
          <th className={classes.row7th}>異物刺さり</th>
          <td className={classes.row7td}>{data.status.foreignObjectStab}</td>
        </tr>
        <tr>
          <th className={classes.row7th}>偏摩耗</th>
          <td>{data.status.unevenWear}</td>
          <th className={classes.row7th}>ホイールリム曲がり</th>
          <td>{data.status.wheelRimBend}</td>
        </tr>
        <tr>
          <th className={classes.row7th}>ひび割れ</th>
          <td>{data.status.crack}</td>
          <th className={classes.row7th}>ホイール腐食</th>
          <td>{data.status.wheelCorrosion}</td>
        </tr>
        <tr>
          <th className={classes.row7th}>傷/セパレーション</th>
          <td>{data.status.separation}</td>
          <th className={classes.row7th}>ナット座摩滅</th>
          <td>{data.status.nutSearWear}</td>
        </tr>
        <tr>
          <th className={classes.row7th}>エア流れ</th>
          <td>{data.status.airFlow}</td>
          <th colSpan={2}></th>
        </tr>
        <tr>
          <th colSpan={2} className={classes.comment}>
            コメント
          </th>
          <th colSpan={3}>{data.comment}</th>
        </tr>
      </table>
    </div>
  );
}

export default TireTable;
