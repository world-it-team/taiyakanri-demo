import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import data from "../data/tireInfo.json";
import TireTable from "./TireTable";
import TireImage from "./TireImage";

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "auto",
  },
  top: {
    width: "100%",
    display: "flex",
  },
  topR1: {
    width: "41%",
  },
  topR2: {
    width: "41%",
  },
  topImage: {
    margin: "auto",
    width: "18%",
  },
});
function TireProfile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.topR1}>
          <TireTable tireInfo={data.tireProfile[0]} />
        </div>
        <div className={classes.topImage}>
          <TireImage tireInfo={data.tireProfile[0]} />
          <TireImage tireInfo={data.tireProfile[1]} />
        </div>
        <div className={classes.topR2}>
          <TireTable tireInfo={data.tireProfile[1]} />
        </div>
      </div>
      <div className={classes.top}>
        <div className={classes.topR1}>
          <TireTable tireInfo={data.tireProfile[2]} />
        </div>
        <div className={classes.topImage}>
          <TireImage tireInfo={data.tireProfile[2]} />
          <TireImage tireInfo={data.tireProfile[3]} />
        </div>
        <div className={classes.topR2}>
          <TireTable tireInfo={data.tireProfile[3]} />
        </div>
      </div>
    </div>
  );
}

export default TireProfile;
