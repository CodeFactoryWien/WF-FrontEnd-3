import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollDown() {
    document.querySelector('.container').scrollIntoView({ block: 'start', behavior: 'smooth'})
  }

}
