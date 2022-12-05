import { Component } from '@angular/core';
import { IChartDatasetConfig } from '../charts/charts.interfaces';
import { chartData, data3, newData } from './output-test.constants';
@Component({
  selector: 'app-output-test',
  templateUrl: './output-test.component.html',
  styleUrls: ['./output-test.component.scss']
})
export class OutputTestComponent {
  chartd = data3
  chartDataValues: Array<IChartDatasetConfig> = chartData;

  height = '350px'
  width = '450px'

  change() {
    this.chartDataValues = newData
  }
}
