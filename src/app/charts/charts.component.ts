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

  createChart() {
    
    let chartConfig = ChartHelper.getChartConfiguration(this.options, this.data, this.chartLabels,this.backgroundColor);
    if (chartConfig) {
      if (this.chart) {
        this.chart.destroy();
      }
      const ctx = this.chartsModel?.nativeElement.getContext('2d');
      // var text = "75%"
      
      // var width=this.chart.width
      // var height=this.chart.height
      // var textX = Math.round((width - ctx.measureText(text).width) / 2);
      // var textY = height / 2;
      // ctx.textBaseline='middle'
      // ctx.fillText("hi",textX,textY)
      // ctx.save()

      this.chart = new Chart(ctx as ChartItem, chartConfig);
      

      // const height=this.chart.height;
      // const width=this.chart.width;
      // ctx?.fillText('hello',200,150)
      

      
      
    }

  }
}
