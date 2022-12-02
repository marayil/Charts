import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IChartDatasetConfig } from '../charts/charts.interfaces';

@Component({
  selector: 'app-output-test',
  templateUrl: './output-test.component.html',
  styleUrls: ['./output-test.component.scss']
})
export class OutputTestComponent implements OnInit, OnChanges {
btnClick=false
data: IChartDatasetConfig={
  data:[[25,30,100]], //[2, 4, 5, 2, 60, 22]]
  type: ['gauge'],
  labels:['fill','fillVal','empty'],
  backgroundColors: ['aliceblue','pink','lightblue','yellow','blue'],
}
data2: IChartDatasetConfig={
  data:[[2, 4, 5, 2, 60, 22],[1, 2, 3, 4, 56, 0]], //[2, 4, 5, 2, 60, 22]]
  type: ['bar','line'],
  labels:['Jan`22', 'Feb`22', 'Mar`22', 'Apr`22', 'May`22', 'Jun`22'],
  backgroundColors: ['aliceblue','pink','red','yellow','blue'],
  stacked:true,
  orderOfCharts:[2,1]

}
height='350px'
width='450px'
  constructor() {
    
  }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    console.log('clicked')
  }

init(){if(this.btnClick){}
  
}
onClick(){
  let datax=[[10,2,3,9,12,14],[12,5,7,9,12,6]]
 this.data2=
 {
  data:[...datax], type: ['bar','bar'],
 labels:['Jan`22', 'Feb`22', 'Mar`22', 'Apr`22', 'May`22', 'Jun`22'],
 backgroundColors: ['aliceblue','pink','red','yellow','blue'],
 stacked:true,
 showXAxis:true,
 showYAxis:true,
 indexAxis:'y'
}
}

}
