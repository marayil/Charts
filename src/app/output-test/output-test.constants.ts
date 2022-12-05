import { ChartTypes } from "../charts/charts.enum";

export const chartData=[{
    data:[[10,20,100]], //[2, 4, 5, 2, 60, 22]]
    type: [ChartTypes.GAUGE],
    labels:['fill','fillVal','empty'],
    backgroundColors: ['aliceblue','pink','lightblue','yellow','blue'],
    title:'OTC Collection Rate',
},
{
    data:[[2, 4, 5, 2, 60, 22],[1, 2, 3, 4, 56, 0]], //[2, 4, 5, 2, 60, 22]]
    type: ['bar','line'],
    labels:['Jan`22', 'Feb`22', 'Mar`22', 'Apr`22', 'May`22', 'Jun`22'],
    backgroundColors: ['aliceblue','pink','red','yellow','blue'],
    stacked:true,
    orderOfCharts:[2,1]
},
{
    data:[[10,2,3,9,12,14],[12,5,7,9,12,6]],
     type: ['bar','bar'],
    labels:['Jan`22', 'Feb`22', 'Mar`22', 'Apr`22', 'May`22', 'Jun`22'],
    backgroundColors: ['aliceblue','pink','red','yellow','blue'],
    stacked:true,
    showXAxis:true,
    showYAxis:true,
    indexAxis:'y'
   }
]