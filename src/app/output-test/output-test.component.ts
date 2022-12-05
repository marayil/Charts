import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { chartData } from './output-test.constants';
@Component({
  selector: 'app-output-test',
  templateUrl: './output-test.component.html',
  styleUrls: ['./output-test.component.scss']
})
export class OutputTestComponent{

chartData=chartData;

height='350px'
width='450px'
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

}
