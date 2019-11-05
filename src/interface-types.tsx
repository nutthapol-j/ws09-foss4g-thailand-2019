import { ReactElement } from "react";
import Highcharts from "highcharts";

export interface MapPropTypes {
    center: [number, number] | undefined
    zoom: number
    className: string
    children: ReactElement
    onMapLoaded: Function
}

export interface ChartType {
    options: Highcharts.Options | undefined;
}

export const ChartOptions: Highcharts.Options | any = {
    global: { useUTC: false }
}

export interface ImageType {
    className: string;
    src: string;
    width: number;
    height: number;
}