import { Chart, ChartConfiguration, Colors, Legend, Tooltip } from 'chart.js';
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
                // {
                //   label: 'graph',
                //   data: data,
                //   type: 'bar',
                //   backgroundColor: backgroundColor[0],
                // },
              
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
              responsive: false,
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
              // [
              //   {
              //     data: data[0],
              //     label: 'Line-Graph',
              //     type: 'line',
              //   },
              // ],
            },
            options:{
              scales:{
                x:{
                  stacked:true
                }
              }
            }
            // options: {
            //   responsive: true,
            //   maintainAspectRatio: false,
            // },
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
              //  [
              //   {
              //     data: data,
              //     label: 'Doughnut',
              //     type: 'doughnut',
              //     backgroundColor: backgroundColor
              //   },
              // ],
            },
              
            options:{
              scales:{
                x:{
                  stacked:true
                }
              }
            }
            // options: {
            //   responsive: false,
            //   maintainAspectRatio: false,
            // },
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
              //  [
              //   {
              //     data: data,
              //     label: 'pie',
              //     type: 'pie',
              //   },
              // ],
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
              // [
              //   {
              //     data: data,
              //     label: 'pop',
              //     type: 'doughnut',
                  
              //   },
              // ],
            },
            options: {
              responsive:false,
              maintainAspectRatio: false,
              circumference: chartType === ChartTypes.GAUGE ? 180 : 360,
              rotation: chartType === ChartTypes.GAUGE ? -90 :0,
              // {
                // title:{
                //  display:true,
                //  text: 'hello'
                // },
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
    if(types[index]=='gauge'){
      typeToUse='doughnut'
    }
    let dats={
      data:data[index],
      type:typeToUse,
      backgroundColor:backgroundColor[index]
    }
    datasetToUse.push(dats)
  }
  return datasetToUse
}