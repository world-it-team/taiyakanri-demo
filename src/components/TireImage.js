import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function getImg(src) {
  const results = src.split("/");
  src = results[results.length - 1];
  return require("../images/" + src).default;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  nameTire: {
    border: "3px solid #61daff",
    height: "50px",
    width: "80%",
    textAlign: "center",
    margin: "auto",
    "& p": {
      fontWeight: "bold",
      fontSize: "20px",
      marginBlockStart: "0.5em",
    },
  },
  image: {
    height: "100px",
    width: "100%",
  },
});

function TireImage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.nameTire}>
        <p>{props.tireInfo.name}</p>
      </div>
      <div>
        <img
          src={getImg(props.tireInfo.image.src)}
          alt={props.tireInfo.image.alt}
          className={classes.image}
        />
      </div>
    </div>
  );
}

export default TireImage;
