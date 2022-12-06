import { ChartConfigurationCustomTypesPerDataset } from 'chart.js';
import { ChartTypes } from './charts.enum';
import { IChartDatasetConfig } from './charts.interfaces';
import { TextManipulationPlugin } from './text-manipulation-plugin';
export class ChartHelper {
  public static getChartConfiguration(
    chartConfig: IChartDatasetConfig
  ): ChartConfigurationCustomTypesPerDataset | null {
          const defaultConfig: ChartConfigurationCustomTypesPerDataset = {
            data: {
              labels: chartConfig.labels,
              datasets: getDataset(chartConfig.data,chartConfig.type,chartConfig.backgroundColors,chartConfig.orderOfCharts?chartConfig.orderOfCharts:[]),
            },
            options: getOptions(chartConfig),
            plugins: chartConfig.type.includes(ChartTypes.GAUGE)||chartConfig.type.includes(ChartTypes.DOUGHNUT)?[TextManipulationPlugin.getPlugin(chartConfig.title)]:[] //plugin added if chartType gauge exists
          };
         const chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDataset(data:Array<Array<number>>,types:Array<string>,backgroundColor:Array<string>, order:Array<number>):Array<any>{
  let typeToUse=''; //variable to store type required for different data
  let sum=0;
  let backgroundColorToUse:unknown;// some charts require multiple background colors and some single
  const chartData=data.map((data,index)=>{
    typeToUse=types[index]
    backgroundColorToUse=backgroundColor[index]
    if(types[index]===ChartTypes.GAUGE||types[index]===ChartTypes.DOUGHNUT||types[index]===ChartTypes.PIE){
       typeToUse=ChartTypes.DOUGHNUT
       backgroundColorToUse=backgroundColor
       data.every(item=>item===0)?data=[0,100]:data;     
     data.forEach((value,index)=>{
      
      data[index]=((value/data[data.length-1])*100)-sum
      sum=sum+data[index]
    })
    
    }
  
    return {data:data, type:typeToUse, backgroundColor:backgroundColorToUse, order:order[index]}
  })
  return chartData
}

function getOptions(chartConfig:IChartDatasetConfig){
 let options={};
       options={
        backgroundColor:chartConfig.backgroundColors,
        cutout:chartConfig.type.includes(ChartTypes.GAUGE)||chartConfig.type.includes(ChartTypes.DOUGHNUT)?'80%':'',
        circumference:chartConfig.type.includes(ChartTypes.GAUGE)? 180:360,
        rotation:chartConfig.type.includes(ChartTypes.GAUGE)? -90:0,
        indexAxis:chartConfig.indexAxis?chartConfig.indexAxis:'x',
          scales:{
            x:{
              display:chartConfig.type.includes(ChartTypes.GAUGE)||chartConfig.type.includes(ChartTypes.DOUGHNUT)||chartConfig.type.includes(ChartTypes.PIE)?false:chartConfig.showXAxis,
              grid:{
                display:chartConfig.showXAxisGrid?chartConfig.showXAxisGrid:false,
              },
              stacked:chartConfig.stacked
            },
            y:{
              display:chartConfig.type.includes(ChartTypes.GAUGE)||chartConfig.type.includes(ChartTypes.DOUGHNUT)||chartConfig.type.includes(ChartTypes.PIE)?false:chartConfig.showYAxis,
              grid:{
                display:chartConfig.showYAxisGrid?chartConfig.showYAxisGrid:false
              },
              stacked:chartConfig.stacked
            }
          },
          plugins:{
            tooltip:{
              enabled:false,
              
            },
            legend:{
              display:false
            }
          },
          responsive: true,
          maintainAspectRatio: true,               
        };
  return options
}