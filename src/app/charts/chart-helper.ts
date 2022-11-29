import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ChartTypes } from './charts.enum';
import { IChartData } from './charts.interfaces';
import { TextManipulationPlugin } from './text-manipulation-plugin';
export class ChartHelper {
  public static getChartConfiguration(
    chartConfig: IChartData
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
            options: getOptions(chartConfig)
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
            options: getOptions(chartConfig)
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
            type: chartType,
            data: {
              labels: chartConfig.labels,
              datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
            },
              
            options:getOptions(chartConfig)
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
            type: chartType,
            data: {
              labels: chartConfig.labels,
              datasets: getConfig(chartConfig.data,chartConfig.type,chartConfig.backgroundColors),
            },
            options: getOptions(chartConfig)
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
            options: getOptions(chartConfig),
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
function getConfig(data:Array<any>,types:Array<string>,backgroundColor?:any){
  let datasetToUse: any[]=[];
  for(var dataValues of data){
    let index=data.indexOf(dataValues)
    let typeToUse=types[index]
   
    let backgroundColorToUse=backgroundColor[index];
    if(types[index]=='gauge'){
      typeToUse='doughnut'
      backgroundColorToUse=backgroundColor
    }
    let datasetValue={
      rotation:-90,
      circumference:180,
      data:data[index],
      type:typeToUse,
      backgroundColor:backgroundColorToUse,
    }
    datasetToUse.push(datasetValue)
  }
  return datasetToUse
}

function getOptions(chartConfig:IChartData){
  
  let options:ChartOptions={
    
    indexAxis:'x',
      scales:{
        x:{
          grid:{
            display:chartConfig.gridOptionsX
          },
          stacked:chartConfig.stacked
        },
        y:{
          grid:{
            display:chartConfig.gridOptionsY
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
    if(chartConfig.type[0]===ChartTypes.GAUGE){
      options={
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

  return options
}