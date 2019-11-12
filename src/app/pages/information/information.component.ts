import { Component, OnInit } from '@angular/core';

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
      pics: 'https://i.ebayimg.com/images/g/SSAAAOSwmrlU1keU/s-l300.jpg',
      descriptions: 'Gras is for everyone',
      emails: 'gras_addicted@grasscript.com',
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
      pics: 'https://scontent-vie1-1.cdninstagram.com/vp/3edd36626537e66dc62ef6dfef3c18a5/5E466223/t51.2885-15/sh0.08/e35/s750x750/64958718_632700010539694_3589811227766202819_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=110',
      descriptions: 'I like cats',
      emails: 'anissinb@gmail.com',
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
      infos: "GrasScript 6 is our self-developed programming language. It can be used front-end and back-end. It is everyone's dream come true!",
    },
    {
      technologies: 'Angular',
      imgLinks: 'https://angular.io/assets/images/logos/angular/angular.png',
      infos: 'Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.',
    },
    {
      technologies: 'Firebase',
      imgLinks: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
      infos: 'Firebase is a mobile and web application development platform developed by Firebase, Inc. in 2011, then acquired by Google in 2014. As of October 2018, the Firebase platform has 18 products, which are used by 1.5 million apps.',
    },
    {
      technologies: 'Sublime',
      imgLinks: 'https://i.imgur.com/AGmyyOX.png',
      infos: 'Sublime Text is a shareware cross-platform source code editor with a Python application programming interface (API). It natively supports many programming languages and markup languages, and functions can be added by users with plugins, typically community-built and maintained under free-software licenses.',
    },
    {
      technologies: 'Visual Studio',
      imgLinks: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2000px-Visual_Studio_Code_1.35_icon.svg.png',
      infos: 'Visual Studio is an Integrated Development Environment(IDE) developed by Microsoft to develop GUI(Graphical User Interface), console, Web applications, web apps, mobile apps, cloud, and web services, etc.',
    },
    {
      technologies: 'Git',
      imgLinks: 'https://avatars2.githubusercontent.com/u/4571183?s=400&v=4',
      infos: 'Git is a free Software for sharing Dataversions that were initialized via Linus Torvald.',
    },
    {
      technologies: 'GitHub',
      imgLinks: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png',
      infos: 'GitHub provides open-source code hosting services.',
    },{
      technologies: 'Chrome',
      imgLinks: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Chrome_icon_%282011%29.svg/2000px-Google_Chrome_icon_%282011%29.svg.png',
      infos: 'Google Chrome is a cross-platform web browser developed by Google. It was first released in 2008 for Microsoft Windows, and was later ported to Linux, macOS, iOS, and Android. The browser is also the main component of Chrome OS, where it serves as the platform for web apps.',
    },{
      technologies: 'Koala',
      imgLinks: 'https://d2.alternativeto.net/dist/icons/koala_29298.png?width=200&height=200&mode=crop&upscale=false',
      infos: 'Koala is a GUI application for Less, Sass, Compass and CoffeeScript compilation, to help web developers to use them more efficiently. Koala can run in windows, linux and mac.',
    },{
      technologies: 'CMD',
      imgLinks: 'https://icon-library.net/images/cmd-icon/cmd-icon-17.jpg',
      infos: 'A command-line interface (CLI) is a means of interacting with a computer program where the user (or client) issues commands to the program in the form of successive lines of text (command lines). The program which handles the interface is called a command-line interpreter or command-line processor.',
    },{
      technologies: 'Moodle',
      imgLinks: 'https://learnbps.bismarckschools.org/pluginfile.php/535022/mod_book/chapter/75350/M1200x800.png',
      infos: 'Moodle is a free and open-source learning management system (LMS) written in PHP and distributed under the GNU General Public License. Developed on pedagogical principles, Moodle is used for blended learning, distance education, flipped classroom and other e-learning projects in schools, universities, workplaces and other sectors.',
    },
  ]
  constructor() {
  }

  ngOnInit() {
  }

  show(e){
    var changeText = e.currentTarget
    var nextElem = e.target.previousElementSibling;
    if (nextElem.style.display==='none') { 
      nextElem.style.display='block'; 
      changeText.innerHTML = "Show less...";
    }
    else { 
      nextElem.style.display='none'; 
      changeText.innerHTML = "Show more...";
    }
  }
}