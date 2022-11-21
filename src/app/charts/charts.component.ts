import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ɵisListLikeIterable } from '@angular/core';
import { ChartConfiguration, Chart,registerables, BarController, BarElement, LinearScale, ChartItem } from 'chart.js';
import { ChartHelper } from './chart-helper';
import { ChartTypes } from './charts.enum';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements  AfterViewInit {
  // @Input() options!: ChartTypes;
@Input() options: any;
@Input() data!: Array<number>;
@Input() chartLabels!: Array<string>;
@Input() chartId!: string;
@ViewChild('chartsModel')chartsModel: ElementRef<HTMLCanvasElement> | undefined;
chart:any;


// @ViewChild('chartsModel')chartsModel: ElementRef<HTMLCanvasElement>;
// @Input() chartConfig!: ChartConfiguration<'bar'|'line'|'doughnut'|'pie'>;

  // @ViewChild('chartsModel')chartsModel: ElementRef<HTMLCanvasElement>;
  // @Input() chartConfig!: ChartConfiguration<'bar'|'line'|'doughnut'|'pie'>;
  constructor() {
    Chart.register(...registerables)
   }

  ngAfterViewInit(): void {
    
   this.createChart();
  }
//setup

createChart(){
  let chartConfig=ChartHelper.getChartConfiguration(this.options,this.data,this.chartLabels);
  if(chartConfig){
    if(this.chart){
      this.chart.destroy();
    }
    const ctx= this.chartsModel?.nativeElement.getContext('2d');
    this.chart=new Chart(ctx as ChartItem, chartConfig);

}

}
}
