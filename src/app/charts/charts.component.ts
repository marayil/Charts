import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, ChartItem, registerables } from 'chart.js';
import { ChartHelper } from './chart-helper';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {
  // @Input() options!: ChartTypes;
  @Input() options!: Array<string>;
  @Input() data!: Array<Array<number>>;
  @Input() chartLabels!: Array<string>;
  @Input() chartId!: string;
  @Input() backgroundColor!: Array<string>;
  @Input() height!: string;
  @Input() width!: string;
  @Input() ngStyle!: { [klass: string]: any; };

  @ViewChild('chartsModel') chartsModel: ElementRef<HTMLCanvasElement> | undefined;
  chart: any;
  
  constructor() {
    Chart.register(...registerables)
  }

  ngAfterViewInit(): void {

    this.createChart();
  }
  //setup

  createChart() {
    
    let chartConfig = ChartHelper.getChartConfiguration(this.options, this.data, this.chartLabels,this.backgroundColor);
    if (chartConfig) {
      if (this.chart) {
        this.chart.destroy();
      }
      const ctx = this.chartsModel?.nativeElement.getContext('2d');
      this.chart = new Chart(ctx as ChartItem, chartConfig);
    }

  }
}
