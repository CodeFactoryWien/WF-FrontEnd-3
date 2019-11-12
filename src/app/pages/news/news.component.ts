import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  data = [
    {
      id : 0,
      title : "Introducing Software Version 6.0",
      author : "Laszlo",
      date : "November",
      description : "It’s here. Software Version 6.0 – our biggest software update ever.",
      body : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?"
    },{
      id : 1,
      title : "GS6 Earns TOP SAFETY Award",
      author: "Mattias",
      date: "November",
      description : "We engineer our script to be the best in the world – in every category.",
      body : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?"
    },{
      id : 2,
      title : "Introducing GS6 Insurance",
      author: "Markus",
      date: "November",
      description : "Starting today, we’re launching GS Insurance.",
      body : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?"
    },{
      id : 3,
      title : "Introducing Megapack",
      author: "Mattias",
      date: "November",
      description : "At GS, we’re committed to safety, which is why we engineered GS6.",
      body : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?"
    },{
      id : 4,
      title : "More Advanced Safety for GS Owners",
      author: "Mattias",
      date: "November",
      description : "We work every day to make them less likely to occur.",
      body : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?"
    },{
      id: 5,
      title: "The Longest-Range Electric script" ,
      author: "Barbara",
      date: "November",
      description: "For more than a decade, making the world’s most efficient electric GS.",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?",
    },{
      id: 6,
      title: "Sustainable Products" ,
      author: "Laszlo",
      date: "November",
      description: "Today, we’re publishing our first ever Impact Report.",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?",
    },{
      id: 7,
      title: "An Update to Our script Lineup" ,
      author: "Markus",
      date: "November",
      description: "GS6 has been the best-selling premium script in the U.S. for the past.",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?",
    },{
      id: 8,
      title: "Introducing a Navigaten" ,
      author: "Markus",
      date: "November",
      description: "For more than a decade, making the world’s most efficient electric GS.",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?",
    },{
      id: 9,
      title: "Update on GS Stores and Pricing" ,
      author: "Barbara",
      date: "November",
      description: "Since we first introduced Navigate on Autopilot last year.",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?",
    },{
      id: 10,
      title: "Introducing V3 Supercharging" ,
      author: "Laszlo",
      date: "November",
      description: "GS has more than 12,00 Superchargers across North America, Europe, and Asia.",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?",
    },{
      id: 11,
      title: "$35,000 GS6 Available Now" ,
      author: "Markus",
      date: "November",
      description: "According to federal statistics, there was an estimated one script.",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam tempora ipsa eius voluptatibus, ut molestias quaerat modi? Iusto maxime voluptate at ut laborum sunt?",
    }
  ]


change(e) {
    var nextElem = e.target.parentNode.nextElementSibling;
    e.target.style.display=`none`;
  
    if (nextElem.style.display==='none') { nextElem.style.display='block'; }
    else { nextElem.style.display='none'; }
}

readLess(e){
   var button = e.target.parentNode.previousElementSibling.lastChild;
   button.style.display=`block`;
   var nextElem = e.target.parentNode;
   console.log(nextElem)
  if (nextElem.style.display==='none') { nextElem.style.display='block'; }
  else { nextElem.style.display='none'; }
}


  constructor() { }

  ngOnInit() {

  }

}
