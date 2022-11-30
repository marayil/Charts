import { ChartConfiguration, ChartConfigurationCustomTypesPerDataset, ChartOptions } from 'chart.js';
import { ChartTypes } from './charts.enum';
import { IChartData } from './charts.interfaces';
import { TextManipulationPlugin } from './text-manipulation-plugin';
export class ChartHelper {
  public static getChartConfiguration(
    chartConfig: IChartData
  ): ChartConfigurationCustomTypesPerDataset | null {
    let chartConfiguration: ChartConfigurationCustomTypesPerDataset;
    //let chartType=chartConfig.type[0] //replace with iteration?
    // switch (chartType) {
      // case ChartTypes.BAR:
      //   {
          const defaultConfig: ChartConfigurationCustomTypesPerDataset = {
            data: {
              labels: chartConfig.labels,
              datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
            },
            options: getOptions(chartConfig, chartConfig.type[0]),
            plugins:[TextManipulationPlugin.getPlugin()]
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
    //     break;
    //   case ChartTypes.LINE:
    //     {
    //       const defaultConfig: ChartConfigurationCustomTypesPerDataset = {
    //         data: {
    //           labels: chartConfig.labels,
    //           datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
    //         },
    //         options: getOptions(chartConfig,chartType)
    //       };
          
    //       chartConfiguration = { ...defaultConfig };
    //       return chartConfiguration;
    //     }
    //     break;
    //   case ChartTypes.DOUGHNUT:
    //     {
    //       const defaultConfig: ChartConfiguration<
    //         'bar' | 'line' | 'pie' | 'doughnut'|'scatter'
    //       > = {
    //         type: ChartTypes.DOUGHNUT,
    //         data: {
    //           labels: chartConfig.labels,
    //           datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
    //         },
              
    //         options:getOptions(chartConfig,chartType)
    //       };
    //       chartConfiguration = { ...defaultConfig };
    //       return chartConfiguration;
    //     }

    //     break;
    //   case ChartTypes.PIE:
    //     {
    //       const defaultConfig: ChartConfiguration<
    //         'bar' | 'line' | 'pie' | 'doughnut'|'scatter'
    //       > = {
    //         type: ChartTypes.PIE,
    //         data: {
    //           labels: chartConfig.labels,
    //           datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
    //         },
    //         options: getOptions(chartConfig,chartType)
    //       };
    //       chartConfiguration = { ...defaultConfig };
    //       return chartConfiguration;
    //     }
    //     break;
    //     case ChartTypes.GAUGE:{
    //       const defaultConfig: ChartConfiguration<
    //         'bar' | 'line' | 'pie' | 'doughnut'
    //       > = {
    //         type: ChartTypes.DOUGHNUT,
    //         data: {
    //           labels: chartConfig.labels,
    //           datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
    //         },
    //         options: getOptions(chartConfig, chartType),
    //         plugins: [TextManipulationPlugin.getPlugin()],
            
    //       };
    //       chartConfiguration = { ...defaultConfig };
    //       return chartConfiguration;
    //     }
    //     break;
    //   default:
    //     return null;
    //     break;
    // }
  }
//}

function getConfig(data:Array<any>,types:Array<string>,backgroundColor?:any){
  let datasetToUse:any[]=[];
  for(var dataValues of data){
    let index=data.indexOf(dataValues)
    let typeToUse=types[index]
   
    let backgroundColorToUse=backgroundColor[index];
    if(types[index]=='gauge'){
      typeToUse=ChartTypes.DOUGHNUT
      backgroundColorToUse=backgroundColor
    }
    let datasetValue={
      cutoutPercentage: '90%',
      rotation:-90,
      circumference:180,
      data:dataValues,
      type:typeToUse,
      backgroundColor:backgroundColorToUse,
    }
    datasetToUse.push(datasetValue)
  }
  return datasetToUse
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
            enabled:true
          },
          legend:{
            display:false,
            
          }
        },
        
      }
    }
    else{
       options={
        // indexAxis:chartConfig.indexAxis,
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
              enabled:true
            },
            legend:{
              display:false,
              
            }
          },
          
          responsive: true,
          maintainAspectRatio: false,    
                       
        };
    }

  return options
}