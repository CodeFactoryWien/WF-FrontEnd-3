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
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
