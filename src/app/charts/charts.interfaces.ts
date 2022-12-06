import { ChartItem } from "chart.js";

export interface IChartDataset{
    labels:Array<string>, //labels for the graph
    data:Array<Array<number>>, //data for the charts
    type:Array<string>, //type of charts to render
    backgroundColors:Array<string>, //colors required for the chart
   
}
export interface IChartDatasetConfig extends IChartDataset{
    title?:string //inner text for Doughnut/Gauge graph
    showXAxisGrid?:boolean,
    showYAxisGrid?:boolean,
    showXAxis?:boolean,
    showYAxis?:boolean,
    indexAxis?: ChartItem, //base axis of graph
    stacked?:boolean, // stacked charts toggle 
    orderOfCharts?:Array<number>,
}