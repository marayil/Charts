import { ChartItem, InteractionAxis } from "chart.js";

export interface IChartData{
    labels:Array<string>,
    title?:string,
    data:Array<Array<number>>,
    ShowXAxis?:boolean,
    ShowYAxis?:boolean,
    type:Array<string>,
    backgroundColors:Array<string>,
    rotation?: boolean,
    indexAxis?: ChartItem,
    stacked?:boolean
}
