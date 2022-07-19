import { Component, OnInit } from '@angular/core';

import { Value } from '../_models/Value';

import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  value : Value[] = [{firstName:"Pragati",lastName:"Gawade"} , {firstName:"Sayali", lastName:"Kadam"}];

  ischecked: Boolean = true;

  text:any;

  myclasses = {

    class1 : true,
    class2 : false
  };

  myStyles = {
    'font-style' : this.ischecked ? 'italic' : 'normal',
    'font-size'  : !this.ischecked ? '24px' : '34px',
    'font-weight': this.ischecked ? 'bold'   : 'normal',
  }


  constructor() { }

  ngOnInit(): void {
  }

}
