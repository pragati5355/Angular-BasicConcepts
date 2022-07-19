import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(){

  }

  // value:any = "Sending Data to parent to child";
  // myFun(val:any)
  // {
  //   // console.log(val);
  //   this.value = val;
  //   // this.value = "Hello";
  // }

 

  ngOnInit(): void {
    console.log("ngOnInit Method")
  }

  // arr : any = [10];
  // myAction(){
  //   this.arr.push(12);
  //   console.log(12);
  //   console.log(this.arr);
  // }

  // ngDoCheck(): void {
  //   console.log("ngDoCheck Method");
  //   alert("You Have Changed the Array");
  // }
}
