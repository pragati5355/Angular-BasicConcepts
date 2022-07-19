import { Component, OnInit } from '@angular/core';
import { Name } from '../_models/Name';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {

  Names : Name[] = [{firstname:"Rushikesh", lastname:"Salunke"}];
  newNumber: Number = 5;
  
  currentcustomer:any= "pragati";

  testStyleBinding: boolean = true;

  //Event Binding
  shownames:any = "Show List";
  showdetails(){
     this.shownames;
  }

  clickcount=0;
  ClickMe()
  {
    this.clickcount++;
  }

  // Property Binding

  src = "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80";
  
  // binding = "true";

  //Two-way Binding

  textMessage: any;

  // Pipes
   
  textPipes = "PRAGATI GAWADE";
  textuppercase = "pragati gawade"
  amount = "100";

  birthdate = new Date(2000, 1, 9);
  numberdecimal = 200;

  a = 0.9083;

  constructor() { }

  ngOnInit(): void {
    this.Names.push({firstname:"Pragati", lastname:"Gawade"})
  }

  showList(){
    this.shownames = JSON.stringify(this.Names);
  }


  

}
