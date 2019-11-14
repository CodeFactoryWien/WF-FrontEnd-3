import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  isLoggedIn:boolean
  userName:string
  constructor() {
    this.isLoggedIn = false
  }

  ngOnInit(){}

  addComment() {
    if(!this.isLoggedIn) {
      this.loginNow()
    } else {
      let text:any = document.getElementById('commentText').value
      let rating:any = document.getElementById('commentRating').value
      document.getElementById('testimonial-container').innerHTML += 
      `
      <div class="testimonial-sm">
                <img src="assets/img/user.png" alt="useravatar">
                <div class="testimonial-right">
                    <p><span>"</span>${text}<span>"</span><br></p>
                    <small>&mdash; ${this.userName}</small>
                </div>
            </div>
      `
      let testis = document.querySelectorAll('.testimonial-sm')
      for(let i = 0; i < parseInt(rating); i++) {
        testis[testis.length-1].children[1].firstElementChild.innerHTML += `<i class="fas fa-star"></i>`
      }
      text = ""
      rating = ""
    }
  }

  loginNow() {
    this.userName = prompt("Whats your name?")
    this.isLoggedIn = true
  }




}
