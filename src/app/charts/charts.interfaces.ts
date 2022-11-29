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

export interface IChartOptions{
    indexAxis?:string,
    scales?:{
        x?:any,
        y?:any,
    },
    responsive:boolean,
    maintainAspectRatio:boolean,
    plugins:{
        tooltip:{},
        legend:{},
    },

}