import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexFlow: 1,
  },
});

function TireImage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={props.src} alt={props.alt}></img>
    </div>
  );
}

export default TireImage;
