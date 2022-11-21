import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-chart';

    sample =[1,2,3,4,56,0,12,10]
    labels=['a','b','c','d','e','f','g','h'];
    id=['0','1']
}
