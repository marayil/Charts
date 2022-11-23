import { AfterContentInit, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ɵisListLikeIterable } from '@angular/core';
import { ChartConfiguration, Chart, registerables, BarController, BarElement, LinearScale, ChartItem } from 'chart.js';
import { X } from 'chart.js/dist/chunks/helpers.core';
import { ChartHelper } from './chart-helper';
import { ChartTypes } from './charts.enum';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {
  // @Input() options!: ChartTypes;
  @Input() options: any;
  @Input() data!: Array<number>;
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
    const counter={
      id:'counter',
      beforeDraw(chart: Chart){
        const{ctx, chartArea:{top,right,bottom,left,width,height}}=chart;
        ctx.save();
        ctx.fillStyle='blue';
        ctx.fillText("hello",width/2,top+(height/2))
      }
    } 
    let chartConfig = ChartHelper.getChartConfiguration(this.options, this.data, this.chartLabels,this.backgroundColor,counter);
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
      ctx?.fillText('hi',)
      

      
      
    }

  }
}
