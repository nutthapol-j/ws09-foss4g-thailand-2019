import React from "react";
import { Grid } from "@material-ui/core";
import Map from "./Map";
import { makeStyles } from "@material-ui/styles";
import Chart from "./Chart";
import Image from "./Image";

const useStyles = makeStyles(theme => ({
  heightGrid: { height: 400 }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.heightGrid}>
        <Map />
      </Grid>
      <Grid item xs={6} className={classes.heightGrid}>
        <Chart />
      </Grid>
      <Grid item xs={6}>
        <Image />
      </Grid>
    </Grid>
  );
};
export default App;
