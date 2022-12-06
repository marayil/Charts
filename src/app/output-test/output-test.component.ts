import { Component } from '@angular/core';
import { IChartDatasetConfig } from '../charts/charts.interfaces';
import { chartData, dummyData, newData } from './output-test.constants';
@Component({
  selector: 'app-output-test',
  templateUrl: './output-test.component.html',
  styleUrls: ['./output-test.component.scss']
})
export class OutputTestComponent{
chartDataValues:Array<IChartDatasetConfig>=chartData;
dummyData=dummyData
height='350px'
width='550px'
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
change(){
  this.chartDataValues=newData
}
}
