import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  teachers = [
    {
      name: 'Markus Gehmayer',
      task: 'Products-Component',
      pics: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg',
      descriptions: '##',
      emails: '##',

    },
    {
      name: 'Mattias Riedl',
      task: 'News-Component',
      pics: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg',
      descriptions: '##',
      emails: '##',
    },
    {
      name: 'Barbara Anissin',
      task: 'Information-Component',
      pics: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg',
      descriptions: '##',
      emails: '##',
    },
    {
      name: 'Laszlo Sandor',
      task: 'Allrounder+Organisation',
      pics: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg',
      descriptions: '##',
      emails: '##',

    }
  ]
  techs = [
    {
      technologies: 'GS6',
      imgLinks: '',
      infos: '##',
    },
    {
      technologies: 'Angular',
      imgLinks: 'https://angular.io/assets/images/logos/angular/angular.png',
      infos: '##',
    },
    {
      technologies: 'Firebase',
      imgLinks: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
      infos: '##',
    },
    {
      technologies: 'Sublime',
      imgLinks: 'https://i.imgur.com/AGmyyOX.png',
      infos: '##',
    },
    {
      technologies: 'Visual Studio',
      imgLinks: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2000px-Visual_Studio_Code_1.35_icon.svg.png',
      infos: '##',
    },
    {
      technologies: 'Git',
      imgLinks: 'https://avatars2.githubusercontent.com/u/4571183?s=400&v=4',
      infos: '##',
    },
    {
      technologies: 'GitHub',
      imgLinks: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png',
      infos: '##',
    },{
      technologies: 'Chrome',
      imgLinks: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Chrome_icon_%282011%29.svg/2000px-Google_Chrome_icon_%282011%29.svg.png',
      infos: '##',
    },{
      technologies: 'Koala',
      imgLinks: 'https://d2.alternativeto.net/dist/icons/koala_29298.png?width=200&height=200&mode=crop&upscale=false',
      infos: '##',
    },{
      technologies: 'CMD',
      imgLinks: 'https://icon-library.net/images/cmd-icon/cmd-icon-17.jpg',
      infos: '##',
    },{
      technologies: 'Moodle',
      imgLinks: 'https://learnbps.bismarckschools.org/pluginfile.php/535022/mod_book/chapter/75350/M1200x800.png',
      infos: '##',
    },
  ]
  constructor() {
  }

  ngOnInit() {
  }

  
  show(e){
    var button = e.target.parentNode.previousElementSibling.lastChild;
    button.style.display=`none`;
    var nextElem = e.target.parentNode;
    console.log(nextElem)
    if (nextElem.style.display==='none') { 
      nextElem.style.display='block'; 
    }
    else { 
      nextElem.style.display='block'; 
    }
  }
  hide(e) {
    var nextElem = e.target.parentNode.nextElementSibling;
    e.target.style.display=`block`;

    if (nextElem.style.display==='block') { 
      nextElem.style.display='none'; 
    }
    else { 
      nextElem.style.display='none'; 
    }
  }
}



