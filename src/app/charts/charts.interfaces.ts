import { ChartItem } from "chart.js";

export interface IChartDataset{
    labels:Array<string>,
    data:Array<Array<number>>,
    type:Array<string>,
    backgroundColors:Array<string>,
   
}
export interface IChartDatasetConfig extends IChartDataset{
    title?:string
    showXAxisGrid?:boolean,
    showYAxisGrid?:boolean,
    showXAxis?:boolean,
    showYAxis?:boolean,
    rotation?: boolean,
    indexAxis?: ChartItem,
    stacked?:boolean,
    orderOfCharts?:Array<number>,
}