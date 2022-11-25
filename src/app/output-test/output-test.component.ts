import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-test',
  templateUrl: './output-test.component.html',
  styleUrls: ['./output-test.component.scss']
})
export class OutputTestComponent implements OnInit, OnChanges {
btnClick=false
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
  height = '200px'
  width = '600px'
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
init(){if(this.btnClick){}
  
}
onClick(){
 this.sample2=[[10,2,3,9,12,14]]
}

}
