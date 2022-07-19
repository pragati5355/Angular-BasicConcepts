import { Component, OnInit , OnChanges, SimpleChanges, Input} from '@angular/core';


@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit, OnChanges{

  constructor() { }

  @Input() Name:any;

  ngOnChanges(changes : SimpleChanges){
    console.log(changes);
  }


  ngOnInit(): void {
    console.log("ngOnInit Method")
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }

 

  // ngOnChanges(changes: SimpleChanges): void {
    
  //   for (const propName in changes)
  //   {
  //     const change = changes[propName];
  //     const cur = JSON.stringify(change.currentValue);
  //     const prev = JSON.stringify(change.previousValue);
  //     this.Values.push({
  //       currentValue: cur,
  //       previousValue: prev
      
  //     })
  //   }
  // }



}
