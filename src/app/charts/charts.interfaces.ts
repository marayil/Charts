export interface IChartData{
    labels:Array<string>,
    title?:string,
    data:Array<Array<number>>,
    gridOptionsX?:boolean,
    gridOptionsY?:boolean,
    type:Array<string>,
    backgroundColors:Array<string>,
    rotation?: boolean,
    indexAxis?: string,
    stacked?:boolean
}
