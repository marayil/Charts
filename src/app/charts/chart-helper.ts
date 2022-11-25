import { Chart, ChartConfiguration, Colors, Legend, Ticks, Tooltip } from 'chart.js';
import { reduce } from 'rxjs';
import { ChartTypes } from './charts.enum';
import { TextManipulationPlugin } from './text-manipulation-plugin';
export class ChartHelper {
  public static getChartConfiguration(
    type: Array<string>,
    data: Array<Array<number>>,
    labels: Array<string>,
    backgroundColor: Array<string>,
  ): ChartConfiguration<'bar' | 'line' | 'pie' | 'doughnut'> | null {
    let chartConfiguration: ChartConfiguration<
      'bar' | 'line' | 'pie' | 'doughnut'
    >;
    let chartType=type[0]
    switch (chartType) {
      case ChartTypes.BAR:
        {
          const defaultConfig: ChartConfiguration<
            'bar' | 'line' | 'pie' | 'doughnut'
          > = {
            type: 'bar',
            data: {
              labels: labels,
              datasets: getConfig(data,type,backgroundColor),
            },
            options: {
              scales:{
                x:{
                  stacked:true
                },
                y:{
                  stacked:true
                }
              },
              responsive: true,
              maintainAspectRatio: false,              
            },
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
        break;
      case ChartTypes.LINE:
        {
          const defaultConfig: ChartConfiguration<
            'bar' | 'line' | 'pie' | 'doughnut'
          > = {
            type: 'line',
            data: {
              labels: labels,
              datasets: getConfig(data,type,backgroundColor)
            },
            options:{
              responsive:true,
              maintainAspectRatio:false,

              scales:{
                x:{
                  grid:{
                    display:false
                  },
                  stacked:true,
                
                },
                y:{min:0,
                  grid:{
                    display:false
                  },
                  stacked:true,
                  ticks:{
                  
                  display:true,
                  stepSize:12,  
                  },
                  position:'right'
                },
                
              }
            }
          };
          
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
        break;
      case ChartTypes.DOUGHNUT:
        {
          const defaultConfig: ChartConfiguration<
            'bar' | 'line' | 'pie' | 'doughnut'
          > = {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets:getConfig(data,type, backgroundColor)
            },
              
            options:{
              scales:{
                x:{
                  stacked:true,
                  grid:{
                    display:false
                  }
                }
              }
            }
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }

        break;
      case ChartTypes.PIE:
        {
          const defaultConfig: ChartConfiguration<
            'bar' | 'line' | 'pie' | 'doughnut'
          > = {
            type: 'pie',
            data: {
              labels: labels,
              datasets:getConfig(data,type, backgroundColor),
            },
            options: {
              scales:{
                x:{
                  stacked:true
                }
              },
              responsive: false,
              maintainAspectRatio: false,
            },
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
        break;
        case ChartTypes.GAUGE:{
          const defaultConfig: ChartConfiguration<
            'bar' | 'line' | 'pie' | 'doughnut'
          > = {
            type: 'doughnut',
            data: {
              labels: labels,
              datasets: getConfig(data,type, backgroundColor)
            },
            options: {
              responsive:false,
              maintainAspectRatio: true,
              aspectRatio:1|1,
              circumference: chartType === ChartTypes.GAUGE ? 180 : 360,
              rotation: chartType === ChartTypes.GAUGE ? -90 :0,
                plugins:{
                  tooltip:{
                    enabled:false, 
                  },
                  legend:{
                    display:false,
                    position:'chartArea',
                  },
                },
              // }
            },
            plugins: [TextManipulationPlugin.getPlugin()],
          };
          chartConfiguration = { ...defaultConfig };
          return chartConfiguration;
        }
        break;
      default:
        return null;
        break;
    }
  }
}
function getConfig(data:Array<any>,types:Array<any>,backgroundColor?:any){
  let datasetToUse: any[]=[];
  for(var dataV of data){
    let index=data.indexOf(dataV)
    let typeToUse=types[index]
    let fillValue=true;
    let tension=0.1
    let backgroundColorToUse=backgroundColor[index];
    if(types[index]=='gauge'){
      typeToUse='doughnut'
      backgroundColorToUse=backgroundColor
    }
    let dats={
      data:data[index],
      type:typeToUse,
      backgroundColor:backgroundColorToUse,
      fill:fillValue,
      borderColor:'rgb(90, 182, 176)',
      tension:tension,
      borderWidth:0.1
    }
    datasetToUse.push(dats)
  }
  return datasetToUse
}