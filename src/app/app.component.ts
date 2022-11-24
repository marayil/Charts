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
  type=['bar','bar'];
  type2=['gauge']
  sample = [[1, 2, 3, 4, 56, 0, 12, 10],[2,4,5,2,60,22,41,5]]
  sample2=[[1,2,3,4,56]]
  labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  id = ['0', '1']
  // backgroundColor= ['rgb(128,0,0)', 'rgb(139,0,0)', 'rgb(165,42,42)',
  //   'rgb(178,34,34)', 'rgb(220,20,60)', 'rgb(255,0,0)', 'rgb(255,99,71)',
  //   'rgb(255,127,80)', 'rgb(205,92,92)', 'rgb(240,128,128)']
  height = '700px'
  width = '700px'
  backgroundColor=['aliceblue','pink']
}
