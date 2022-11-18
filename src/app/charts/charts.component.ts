import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ChartTypes } from './charts.enum';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
// @Input() options!: ChartTypes;
@Input() options: any;
@Input() data!: number[];
@ViewChild('chartCanvas') chartCanvas!:ElementRef<HTMLCanvasElement>;
  // @Input() chartConfig!: ChartConfiguration<'bar'|'line'|'doughnut'|'pie'>;
  constructor() { }

  ngOnInit(): void {
    this.getChartConfiguration(this.options);
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
          datasets:[]
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
}
