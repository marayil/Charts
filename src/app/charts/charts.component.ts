import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Chart, ChartItem, registerables } from 'chart.js';
import { ChartHelper } from './chart-helper';
import { IChartData } from './charts.interfaces';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {
  @Input() chartConfig!: IChartData
  @Input() options!: Array<string>;
  @Input() data!: Array<Array<number>>;
  @Input() chartLabels!: Array<string>;
  @Input() backgroundColor!: Array<string>;
  @Input() height?: string;
  @Input() width?: string;
  @Input() ngStyle!: { [klass: string]: any; };

  @ViewChild('chartsModel') chartsModel: ElementRef<HTMLCanvasElement> | undefined;
  chart: any;
  constructor() {
    Chart.register(...registerables)
  }

  ngAfterViewInit(): void {

    this.createChart();
  }
  ngOnChanges(changes: SimpleChanges):void{
    console.log('hi');
    if( changes['chartConfig'].previousValue!=null){
      this.createChart();
    }

    // this.createChart();
  }
  //setup

  createChart() {
    
    let chartConfig = ChartHelper.getChartConfiguration(this.chartConfig);
    if (chartConfig) {
      if (this.chart) {
        this.chart.destroy();
      }
      const ctx = this.chartsModel?.nativeElement.getContext('2d');
      this.chart = new Chart(ctx as ChartItem, chartConfig);
      this.chart.update()
    }

  }
}
