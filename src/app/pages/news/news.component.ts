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
      title : "Title",
      author : "Author",
      date : "September",
      description : "Description",
      body : "Body"
    },{
      id : 1,
      title : "Katze sitzt auf einem Baum fest",
      author: "Mattias",
      date: "November",
      description : "Eine Katze sitzt auf einem Baum fest und kommt nicht mehr runter.",
      body : "Body"
    },{
      id : 2,
      title : "Katze sitzt auf einem Baum fest2",
      author: "Mattias",
      date: "November",
      description : "Eine Katze sitzt auf einem Baum fest und kommt nicht mehr runter.",
      body : "Body"
    },{
      id : 3,
      title : "Katze sitzt auf einem Baum fest3",
      author: "Mattias",
      date: "November",
      description : "Eine Katze sitzt auf einem Baum fest und kommt nicht mehr runter.",
      body : "Body"
    },{
      id : 4,
      title : "Katze sitzt auf einem Baum fest4",
      author: "Mattias",
      date: "November",
      description : "Eine Katze sitzt auf einem Baum fest und kommt nicht mehr runter.",
      body : "Body"
    },
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
