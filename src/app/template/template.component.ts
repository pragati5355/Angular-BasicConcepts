import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  name = "pragati gawade";
  Date = new Date(2022,4,2);

  a:number = 3.4520987;





  constructor() { }

  ngOnInit(): void {
  }

}
