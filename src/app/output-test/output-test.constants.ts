import { ChartTypes } from "../charts/charts.enum";
import { IChartDatasetConfig } from "../charts/charts.interfaces";

export const chartData=[{
    data:[[10,20,100]], //[2, 4, 5, 2, 60, 22]]
    type: [ChartTypes.GAUGE],
    labels:['fill','fillVal','empty'],
    backgroundColors: ['aliceblue','pink','lightblue','yellow','blue'],
    title:'OTC Collection Rate',
},
{
    data:[[2, 4, 5, 2, 60, 22],[1, 2, 3, 4, 56, 0]], //[2, 4, 5, 2, 60, 22]]
    type: [ChartTypes.BAR,ChartTypes.LINE],
    labels:['Jan`22', 'Feb`22', 'Mar`22', 'Apr`22', 'May`22', 'Jun`22'],
    backgroundColors: ['aliceblue','pink','red','yellow','blue'],
    stacked:true,
    orderOfCharts:[2,1]
},
]

export const newData=[{
    data:[[30,50,100]], //[2, 4, 5, 2, 60, 22]]
    type: [ChartTypes.GAUGE],
    labels:['fill','fillVal','empty'],
    backgroundColors: ['aliceblue','pink','lightblue','yellow','blue'],
    title:'Sample Data 2',
},
    
    {
    data:[[10,2,3,9,12,14],[12,5,7,9,12,6]],
     type: [ChartTypes.BAR,ChartTypes.BAR],
    labels:['Jan`22', 'Feb`22', 'Mar`22', 'Apr`22', 'May`22', 'Jun`22'],
    backgroundColors: ['aliceblue','pink','red','yellow','blue'],
    stacked:true,
    showXAxis:true,
    showYAxis:true,
    indexAxis:'y'
   },

]
export const data3:Array<IChartDatasetConfig>=[{
    data:[[10,20,50]],
    type:[ChartTypes.LINE],
    labels:['hi','b','cc'],
    backgroundColors:['lightblue','grey','darkgrey'],
    title:'hi'
   }]