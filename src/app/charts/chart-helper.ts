import { ChartConfiguration } from 'chart.js';
import { ChartTypes } from './charts.enum';
import { IChartData } from './charts.interfaces';
import { TextManipulationPlugin } from './text-manipulation-plugin';
export class ChartHelper {
  public static getChartConfiguration(
    chartConfig: IChartData
    // type: Array<string>,
    // data: Array<Array<number>>,
    // labels: Array<string>,
    // backgroundColor: Array<string>,
  ): ChartConfiguration<'bar' | 'line' | 'pie' | 'doughnut'> | null {
    let chartConfiguration: ChartConfiguration<
      'bar' | 'line' | 'pie' | 'doughnut'
    >;
    let chartType=chartConfig.type[0]
    switch (chartType) {
      case ChartTypes.BAR:
        {
          const defaultConfig: ChartConfiguration<
            'bar' | 'line' | 'pie' | 'doughnut'
          > = {
            type: 'bar',
            data: {
              labels: chartConfig.labels,
              datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
            },
            options: getOptions()
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
              labels: chartConfig.labels,
              datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
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
              labels: chartConfig.labels,
              datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
            },
              
            options:getOptions()
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
              labels: chartConfig.labels,
              datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
            },
            options: getOptions()
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
              labels: chartConfig.labels,
              datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
            },
            options: {
              responsive:false,
              maintainAspectRatio: true,
              circumference: chartType === ChartTypes.GAUGE ? 180 : 360,
              rotation: chartType === ChartTypes.GAUGE ? -90 :0,
                plugins:{
                  
                  tooltip:{
                    enabled:true,
                  
                     
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
      borderWidth:0.1,
      label:'hi'
    }
    datasetToUse.push(dats)
  }
  return datasetToUse
}

function getOptions(){
  let options={
    
      scales:{
        x:{
          grid:{
            display:false
          },
          stacked:true
        },
        y:{
          grid:{
            display:false
          },
          stacked:true
        }
      },
      responsive: true,
      maintainAspectRatio: false,              
    };

  
  return options
}