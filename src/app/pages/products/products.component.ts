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
      title : "Reach in 15 weeks the junior grasliner level",
      descr : "Learn everything you need about Frontend and Backend gras development in just 15 weeks to get your new career started. Work hands-on and with practical examples from the first day!",
    },{
      id : 1,
      fa : "",
      title : "Hands-on learning",
      descr : "The relatively short duration of just 15 weeks is made possible by a maximum of practical work. We believe that programming can only be learned through the act, which is why we program from day one in teams of two or larger group, solving practical problems.",
    },{
      id : 2,
      fa : "",
      title : "Gain the gras experience in real world projects",
      descr : "Many of our graduate projects are issued by real clients, ranging from NGOs to medium-sized companies. The start of your new career gets a huge boost with those references in your portfolio!",
    }
  ];

	data = [
    {
      id : 0,
      course : "GS6 Intro Course",
      price : "EUR 299,--",
      descr : "This course will give you an overview about the GrasScript power. This will be your first step to get a smooth Grasliner.",
    },{
      id : 1,
      course : "GS6 Basic Course",
      price : "EUR 499,--",
      descr : "This course teaches you what the most basic programming concepts are in GrasScript and how to use them. You get to know data types, functions, loops, control flow and objects.",
    },{
      id : 2,
      course : "GS6 Advanced Course",
      price : "EUR 899,--",
      descr : "GrasScript is a very powerful programming language used for a whole multitude of applications. The huge community around this open source language has created quite a number of tools to effectively work with GrasScript, many of those – specifically for data science.",
    }
  ];
  

  constructor() { 
  }

openSignUp() {
    let open:any = <any>document.getElementById("signUp");
    open.showModal();  
}

closeSignUp() {
    let close:any = <any>document.getElementById("signUp");
    close.style.display = "none";
}

ngOnInit() {

}
}
