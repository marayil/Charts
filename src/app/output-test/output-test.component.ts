import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IChartData } from '../charts/charts.interfaces';

@Component({
  selector: 'app-output-test',
  templateUrl: './output-test.component.html',
  styleUrls: ['./output-test.component.scss']
})
export class OutputTestComponent implements OnInit, OnChanges {
btnClick=false
data: IChartData={
  data:[[1, 2, 3, 4, 56, 0]], //[2, 4, 5, 2, 60, 22]]
  type: ['gauge'],
  labels:['Jan`22', 'Feb`22', 'Mar`22', 'Apr`22', 'May`22', 'Jun`22'],
  backgroundColors: ['aliceblue','pink','red','yellow','blue'],
}
data2: IChartData={
  data:[[2, 4, 5, 2, 60, 22],[1, 2, 3, 4, 56, 0]], //[2, 4, 5, 2, 60, 22]]
  type: ['bar','line'],
  labels:['Jan`22', 'Feb`22', 'Mar`22', 'Apr`22', 'May`22', 'Jun`22'],
  backgroundColors: ['aliceblue','pink','red','yellow','blue'],
  stacked:true,

}
// @Output() dataChange= new EventEmitter<Array<Array<number>>>();
 sample = [[1, 2, 3, 4, 56, 0],[2, 4, 5, 2, 60, 22]]
  // 
   sample2=[[1, 2, 3, 4, 5, 6]]
   labels = ['Jan`22', 'Feb`22', 'Mar`22', 'Apr`22', 'May`22', 'Jun`22']
  id = ['0', '1','2']
  s3=[[10,1,2,22,3]]
  // backgroundColor= ['rgb(128,0,0)', 'rgb(139,0,0)', 'rgb(165,42,42)',
  //   'rgb(178,34,34)', 'rgb(220,20,60)', 'rgb(255,0,0)', 'rgb(255,99,71)',
  //   'rgb(255,127,80)', 'rgb(205,92,92)', 'rgb(240,128,128)']
  height = '350px'
  width = '350px'
  backgroundColor=['aliceblue','pink','red','yellow','blue']
  constructor() {
    
  }

  ngOnInit(): void {
    if(!this.btnClick){
      this.sample2=[[12, 23, 36, 30, 25, 42]]
    }
    else{
      this.sample2=[[10,2,3,9,12,14]]
    }
  }
  ngOnChanges():void{
    console.log('clicked')
  }
  type=['bar','bar'];
  type2=['line'];
  type3=['gauge']
  type4=['line','line']
  sample4=[[3,6,8,12,4,9],[12,5,7,9,12,6]]
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
 ShowXAxis:false,
 ShowYAxis:false
}
}

}
