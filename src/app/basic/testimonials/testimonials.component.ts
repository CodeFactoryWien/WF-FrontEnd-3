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
      this.showLogin()
    } else {
      let text:any = (<HTMLInputElement>document.getElementById('commentText')).value
      let rating:any = (<HTMLInputElement>document.getElementById('commentRating')).value
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
      if(rating > 5 || rating < 1) {
        for(let i = 0; i < 5; i++) {
          testis[testis.length-1].children[1].firstElementChild.innerHTML += `<i class="fas fa-star"></i>`
        }
      } else {
        for(let i = 0; i < parseInt(rating); i++) {
          testis[testis.length-1].children[1].firstElementChild.innerHTML += `<i class="fas fa-star"></i>`
        }
      }
      this.clearInputs()
    }
  }

  clearInputs() {
    (<HTMLInputElement>document.getElementById('commentText')).value = "";
    (<HTMLInputElement>document.getElementById('commentRating')).value = "";

  }

  showLogin() {
    document.getElementById('comment-login').style.display = "grid"
    document.getElementById('comment-login').scrollIntoView({behavior: "smooth"})
  }

  loginNow() {
    this.userName = (<HTMLInputElement>document.getElementById('userName')).value
    this.isLoggedIn = true
    document.getElementById('testimonial-comment').scrollIntoView({behavior:"smooth", block:"center"})
    document.getElementById('comment-login').style.display = "none"
  }




}
