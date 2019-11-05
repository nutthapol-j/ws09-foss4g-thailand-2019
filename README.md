# ws09-foss4g-thailand-2019

> Example for create react package for support Map, Chart and CCTV

[![NPM](https://img.shields.io/npm/v/ws09-foss4g-thailand-2019.svg)](https://www.npmjs.com/package/ws09-foss4g-thailand-2019) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ws09-foss4g-thailand-2019
```

## Usage

```tsx
import * as React from "react";

import {
  Imagecomponent,
  Chartcomponent,
  Mapcomponent
} from "ws09-foss4g-thailand-2019";

const Example = () => {
  const example = useMyHook();
  return (
    <div>
      <div>
        <Mapcomponent />
      </div>
      <div>
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
      </div>
      <div>
        <Imagecomponent src={state} width={500} height={300} />
      </div>
    </div>
  );
};
```

## License

BSD 3-Clause © [nutthapol.j@i-bitz.co.th](https://github.com/nutthapol.j@i-bitz.co.th)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
