import { ChartConfiguration, ChartConfigurationCustomTypesPerDataset, ChartOptions } from 'chart.js';
import { ChartTypes } from './charts.enum';
import { IChartData } from './charts.interfaces';
import { TextManipulationPlugin } from './text-manipulation-plugin';
export class ChartHelper {
  public static getChartConfiguration(
    chartConfig: IChartData
  ): ChartConfigurationCustomTypesPerDataset | null {
    let chartConfiguration: ChartConfigurationCustomTypesPerDataset;
          const defaultConfig: ChartConfigurationCustomTypesPerDataset = {
            data: {
              labels: chartConfig.labels,
              datasets: getDataset(chartConfig.data,chartConfig.type,chartConfig.backgroundColors,chartConfig.orderOfCharts?chartConfig.orderOfCharts:[]),
            },
            options: getOptions(chartConfig),
            plugins: chartConfig.type.includes(ChartTypes.GAUGE)?[TextManipulationPlugin.getPlugin()]:[] //plugin added if chartType gauge exists
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
  }

function getDataset(data:Array<any>,types:Array<string>,backgroundColor:any, order:Array<number>):Array<any>{
  let typeToUse=''; //variable to store type required for different datas
  let backgroundColorToUse=[];// some charts require multiple background colors and some single
  let chartData=data.map((data,index)=>{
    typeToUse=types[index]
    backgroundColorToUse=backgroundColor[index]
    if(types[index]===ChartTypes.GAUGE){
      typeToUse=ChartTypes.DOUGHNUT
      backgroundColorToUse=backgroundColor
    }
    return {data:data, type:typeToUse, backgroundColor:backgroundColorToUse, circumference:180, rotation:-90, order:order[index]}
  })
  return chartData
}

function getOptions(chartConfig:IChartData){
 let options={};
       options={
        cutout:'80%',
        circumference:180,
        rotation:-90,
        indexAxis:chartConfig.indexAxis?chartConfig.indexAxis:'x',
          scales:{
            x:{
              display:chartConfig.type.includes(ChartTypes.GAUGE)?false:chartConfig.showXAxis,
              grid:{
                display:chartConfig.showXAxisGrid?chartConfig.showXAxisGrid:false,
              },
              stacked:chartConfig.stacked
            },
            y:{
              display:chartConfig.type.includes(ChartTypes.GAUGE)?false:chartConfig.showYAxis,
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
          maintainAspectRatio: false,               
        };
  return options
}