import { ChartItem } from "chart.js";

export interface IChartData{
    labels:Array<string>,
    title?:string,
    data:Array<Array<number>>,
    showXAxisGrid?:boolean,
    showYAxisGrid?:boolean,
    showXAxis?:boolean,
    showYAxis?:boolean,
    type:Array<string>,
    backgroundColors:Array<string>,
    rotation?: boolean,
    indexAxis?: ChartItem,
    stacked?:boolean,
    orderOfCharts?:Array<number>
}
