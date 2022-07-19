import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-style',
  // templateUrl: './component-style.component.html',
  // styleUrls: ['./component-style.component.css'],

  template:`
  <h4>Component - Style</h4>
  <div>
    
  </div>`,

  styles:['h4 {text-align:center; font-weight:normal; font-style:italic; }']
})
export class ComponentStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
