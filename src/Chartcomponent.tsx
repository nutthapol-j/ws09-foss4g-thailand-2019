import React, { forwardRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsVariwide from 'highcharts/modules/variwide'
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import { ChartType, ChartOptions } from './interface-types'

const Chartcomponent = forwardRef((props: ChartType, ref: any) => {
    HighchartsMore(Highcharts)
    HighchartsVariwide(Highcharts)
    Highcharts.setOptions(ChartOptions)
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <HighchartsReact
                ref={ref}
                highcharts={Highcharts}
                options={props.options}
            />
        </div>
    )
})

Chartcomponent.defaultProps = {
    options: undefined
}

export default Chartcomponent
