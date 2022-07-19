import { Component, OnInit } from '@angular/core';



import { Hero } from '../_models/Hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  showdetails:any;
  maxDate:any = new Date();

  invalidFirstname: boolean = false;
  invalidLastname: boolean = false;
  invalidEmail : boolean = false;
  invalidDob : boolean = false;
  invalidAddress : boolean = false;
  
  name: any = {
    firstname: '',
    lastname: '',
    email:'',
    dob: '',
    address: ''
  }
  
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.name)
    // this.DateFun();

  }

  showList()
  {
    if(this.name.firstname == '' || this.name.firstname == undefined || this.name.firstname == null){
      this.invalidFirstname = true;
    } else if(String(this.name.firstname).length < 4){
      this.invalidFirstname = true;
    } else {
      this.invalidFirstname = false;
    }

    if(this.name.lastname == '' || this.name.lastname == undefined || this.name.lastname == null){
      this.invalidLastname = true;
    } else if(String(this.name.lastname).length < 4){
      this.invalidLastname = true;
    } else {
      this.invalidLastname = false;
    }

    if(this.name.email == '' || this.name.email == undefined || this.name.email == null)
    {
      this.invalidEmail = true;
    } else if(!String(this.name.email).endsWith('@gmail.com')){ 
      this.invalidEmail = true;
    }else {
      this.invalidEmail = false;
    }

    if(this.name.dob == '' || this.name.dob == undefined || this.name.dob == null){
      this.invalidDob = true;
    }else{
      this.invalidDob = false;
    }

    if(this.name.address == '' || this.name.address == undefined || this.name.address == null){
      this.invalidAddress = true;
    } else if(String(this.name.address).length < 100){
      this.invalidAddress = true;
    } else {
      this.invalidAddress = false;
    }

    if(this.invalidLastname || this.invalidFirstname || this.invalidEmail || this.invalidAddress){
      return;
    }
    console.log(JSON.stringify(this.name));
    this.name = {};
  }

  // DateFun(){
  //   var date:any = new Date();
  //   var todayDate:any = date.getDate();
  //   var month:any = date.getMonth()+1;
  //   var year:any = date.getFullYear();

  //   this.maxDate = year + '-' + month + '-' + todayDate;
  //   console.log(this.maxDate);
  // }

}
