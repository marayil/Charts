import { ChartTypes } from "../charts/charts.enum";
import { IChartDatasetConfig } from "../charts/charts.interfaces";

export const chartData:Array<IChartDatasetConfig>=[{
    data:[[10,20,100]], 
    type: [ChartTypes.GAUGE],
    labels:['fill','fillVal','empty'],
    backgroundColors: ['aliceblue','pink','lightblue','yellow','blue'],
    title:'sample data test version 1',
},
{
    data:[[2, 4, 5, 2, 60, 22],[1, 2, 3, 4, 56, 0]], 
    type: [ChartTypes.BAR,ChartTypes.LINE],
    labels:['Jan`22', 'Feb`22', 'Mar`22', 'Apr`22', 'May`22', 'Jun`22'],
    backgroundColors: ['aliceblue','pink','red','yellow','blue'],
    orderOfCharts:[2,1]
},
]

export const newData:Array<IChartDatasetConfig>=[{
    data:[[30,50,100]], 
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
    showXAxis:false,
    showYAxis:true,
    indexAxis:'y'
   },

]
export const dummyData:Array<IChartDatasetConfig>=[{
    data:[[20,70,100]],
    type:[ChartTypes.DOUGHNUT],
    labels:['hi','b','cc'],
    backgroundColors:['lightgreen','darkblue','violte'],
    title:'Custom Title'
   },
   {
    data:[[10,20,50]],
    type:[ChartTypes.PIE],
    labels:['hi','b','cc'],
    backgroundColors:['lightblue','grey','darkgrey'],
    title:'hi'
   },
]