import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	advantages = [
    {
      id : 0,
      fa : "",
      title : "test",
      descr : "Text",
    },{
      id : 1,
      fa : "",
      title : "test",
      descr : "Text",
    },{
      id : 2,
      fa : "",
      title : "test",
      descr : "Text",
    }
  ];

	data = [
    {
      id : 0,
      course : "Intro",
      price : "EUR 299,--",
      descr : "Intro Text",
    },{
      id : 1,
      course : "Basic",
      price : "EUR 499,--",
      descr : "Basic Text",
    },{
      id : 2,
      course : "Advanced",
      price : "EUR 899,--",
      descr : "Adv Text",
    }
  ];
  


  constructor() { 

  }

openSignUp() {
    let myDialog:any = <any>document.getElementById("signUp");
    myDialog.showModal();
}

  ngOnInit() {

  }

}
