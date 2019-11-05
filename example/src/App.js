import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@material-ui/core";
import {
  Mapcomponent,
  Chartcomponent,
  Imagecomponent
} from "ws09-foss4g-thailand-2019";
import { makeStyles } from "@material-ui/styles";
import coolImages from "cool-images";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  heightGrid: { height: 400 }
}));

const App = () => {
  const classes = useStyles();
  const [state, setstate] = useState([]);
  const [image, setimage] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const max = 50;
    const intervalRandom = setInterval(() => {
      const series = ref.current.chart.series;
      series[0].data[0].remove(false);
      series[0].addPoint([
        Number(new moment().format("x")),
        Math.floor(Math.random() * Math.floor(max))
      ]);
      setimage(coolImages.one());
    }, 5000);
    return () => {
      clearInterval(intervalRandom);
    };
  }, [state]);

  useEffect(() => {
    let initSeries = [];
    const max = 50;
    for (let index = 0; index < 10; index++) {
      initSeries = [
        [
          new moment().format("x") - index * 5000,
          Math.floor(Math.random() * Math.floor(max))
        ],
        ...initSeries
      ];
    }
    setstate(initSeries);
    return () => {};
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.heightGrid}>
        <Mapcomponent />
      </Grid>
      <Grid item xs={6} className={classes.heightGrid}>
        <Chartcomponent
          ref={ref}
          options={{
            chart: { type: "spline" },
            title: {
              text: "Real-time Air Quality Index"
            },
            xAxis: {
              type: "datetime"
            },
            yAxis: {
              title: {
                text: "Air Quality Index"
              }
            },
            legend: {
              layout: "vertical",
              align: "right",
              verticalAlign: "middle"
            },
            tooltip: {
              crosshairs: true,
              shared: true
            },
            series: [
              {
                name: "random value",
                data: state
              }
            ],
            responsive: {
              rules: [
                {
                  condition: {
                    maxWidth: 500
                  },
                  chartOptions: {
                    legend: {
                      layout: "horizontal",
                      align: "center",
                      verticalAlign: "bottom"
                    }
                  }
                }
              ]
            }
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Imagecomponent src={image} width={500} height={300} />
      </Grid>
    </Grid>
  );
};
export default App;
