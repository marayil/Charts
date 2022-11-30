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
              datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
            },
            options: getOptions(chartConfig, chartConfig.type[0]),
            plugins: chartConfig.type.includes(ChartTypes.GAUGE)?[TextManipulationPlugin.getPlugin()]:[]
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
  }

function getConfig(data:Array<any>,types:Array<string>,backgroundColor?:any):Array<any>{
  let typeToUse='';
  let backgroundColorToUse=[];
  let chartData=data.map((data,index)=>{
    typeToUse=types[index]
    backgroundColorToUse=backgroundColor[index]
    if(types[index]===ChartTypes.GAUGE){
      typeToUse=ChartTypes.DOUGHNUT
      backgroundColorToUse=backgroundColor
    }
  
    return {data:data, type:typeToUse, backgroundColor:backgroundColorToUse, circumference:180, rotation:-90}
  })
  return chartData

}

function getOptions(chartConfig:IChartData, chartType:string){
  
 let options={}
    if(chartType===ChartTypes.GAUGE){
      options={
        cutout: '80%',
        responsive:true,
        maintainAspectRatio:false,
        aspectRatio:1,
        plugins:{
          tooltip:{
            enabled:false
          },
          legend:{
            display:false
          }
        }
      }
    }
    else{
       options={
          scales:{
            x:{
              grid:{
                display:chartConfig.ShowXAxis
              },
              stacked:chartConfig.stacked
            },
            y:{
              grid:{
                display:chartConfig.ShowYAxis
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
    }

  return options
}