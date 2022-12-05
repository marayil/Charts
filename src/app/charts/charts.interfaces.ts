import { ChartItem } from "chart.js";

export interface IChartDataset {
    labels: Array<string>, // label of X/Y axis
    data: Array<Array<number>>, //  data values represented in the graph
    type: Array<string>, // type of graph
    backgroundColors: Array<string>, // colours used in the graph

}
export interface IChartDatasetConfig extends IChartDataset {
    title?: string // inner text for doughnut/gauge charts
    showXAxisGrid?: boolean, // toggle X axis grid
    showYAxisGrid?: boolean, //toggle Y axis grid
    showXAxis?: boolean, // show X axis
    showYAxis?: boolean, // show Y axis
    indexAxis?: ChartItem, // the base axis
    stacked?: boolean, // whether graphs are stacked or not; applicable only to bar graphs
    orderOfCharts?: Array<number> // specify which graph appears on top
}