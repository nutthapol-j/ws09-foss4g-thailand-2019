import React, { useState, useEffect, useRef } from "react";
import { Chartcomponent } from "ws09-foss4g-thailand-2019";
import moment from "moment";

const Chart = () => {
  const [state, setstate] = useState([]);
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
  );
};

export default Chart;
