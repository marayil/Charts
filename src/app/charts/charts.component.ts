import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild, ɵisListLikeIterable } from '@angular/core';
import { ChartConfiguration, Chart,registerables, BarController, BarElement, LinearScale } from 'chart.js';
import { ChartTypes } from './charts.enum';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements  OnInit {
// @Input() options!: ChartTypes;
@Input() options: any;
@Input() data!: number[];
@Input() chartLabel!: string;
@ViewChild('chartsModel') chartsModel!:ElementRef<HTMLCanvasElement>;
  // @Input() chartConfig!: ChartConfiguration<'bar'|'line'|'doughnut'|'pie'>;
  constructor() {
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    Chart.register(BarController,BarElement, LinearScale);
   this.createChart();
  }
//setup
getChartConfiguration(options:string): ChartConfiguration<'bar'|'line'|'pie'|'doughnut'>|null{
  let chartConfiguration: ChartConfiguration<'bar'|'line'|'pie'|'doughnut'>
  switch(options){
    case ChartTypes.BAR:{
      console.log("hello")
      const defaultConfig: ChartConfiguration<'bar'|'line'|'pie'|'doughnut'>={
        type: 'bar',
        data: {
          labels:[],
          datasets:[{
            data:this.data,
            type:this.options
          }]
        },
        options:{

        }
      }
      chartConfiguration={...defaultConfig};
      return chartConfiguration
    }
      break;
    case ChartTypes.LINE:{
      const defaultConfig: ChartConfiguration<'bar'|'line'|'pie'|'doughnut'>={
        type: 'line',
        data: {
          labels:[],
          datasets:[]
        },
        options:{

        }
      }
      chartConfiguration={...defaultConfig};
      return chartConfiguration
    }
      break;
    case ChartTypes.DOUGHNUT:{
      const defaultConfig: ChartConfiguration<'bar'|'line'|'pie'|'doughnut'>={
        type: 'doughnut',
        data: {
          labels:[],
          datasets:[]
        },
        options:{
          maintainAspectRatio: options===ChartTypes.DOUGHNUT,

        }
      }
      chartConfiguration={...defaultConfig};
      return chartConfiguration
    }
      break;
    default:
      return null;
      break;
  }
}
createChart(){
  let chartConfig=this.getChartConfiguration(this.options);
  if(chartConfig){
  new Chart( "chartsModel" ,{
    type: chartConfig?.type,
    data:{
      labels:chartConfig.data.labels,
      datasets:chartConfig.data.datasets
    },
    options:chartConfig.options
  });//configurations setup
}
}

}

