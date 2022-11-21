import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild, ɵisListLikeIterable } from '@angular/core';
import { ChartConfiguration, Chart,registerables, BarController, BarElement, LinearScale } from 'chart.js';
import { ChartHelper } from './chart-helper';
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
@Input() chartLabels!: string[];
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

createChart(){
  let chartConfig=ChartHelper.getChartConfiguration(this.options,this.data,this.chartLabels);
  if(chartConfig){
//   new Chart( "chartsModel" ,{
//     type: chartConfig?.type,
//     data:{
//       labels:chartConfig.data.labels,
//       datasets:[{
//         data: chartConfig.data.datasets[0].data
//       }]
//     },
//     options:chartConfig.options
//   });//configurations setup
// }
new Chart("chartsModel", chartConfig)
}

}
}
