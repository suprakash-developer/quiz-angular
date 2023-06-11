import { Component, OnInit} from '@angular/core';
import{HttpserviceService} from "./httpservice.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quize';
  quizeData:any="";
  singleValue:any=""
  i=0;
  right=0;
  wrong=0;
  gameEnd=true
  quesLength:any=""
  opquiz = null
  resChk:any=""
  timer=21
  setTimer:any=""
  status: boolean = true;
  constructor(private getService:HttpserviceService){}
  ngOnInit(){
    this.getService.getQuise().subscribe((result:any)=>{
      this.quizeData=result
      this.quesLength=this.quizeData.length
      this.singleValue=this.quizeData[this.i]
      console.log(this.quesLength)
    })
   setInterval (() => {
    if(this.timer==0){
      this.nxtQus()
    }
    this.timer--
  }, 1000);
  }

  nxtQus(){
    if(this.quesLength==this.i+1){
      this.gameEnd=false
    }
     if(this.resChk==this.singleValue.correct){
      this.right++;
    }
    this.i++;
    this.singleValue=this.quizeData[this.i]
    this.timer=21;
    this.reSet()
    console.log(this.right)
    this.status = !this.status;
  }
  optiVal(value:any){
    return this.resChk=value;
  }
  reSet(){
    this.opquiz=null
  }
  goBack(){
    this.i=0;
    this.singleValue=this.quizeData[this.i]
    this.gameEnd=true
    this.right=0
    this.timer=21;
  }
}
