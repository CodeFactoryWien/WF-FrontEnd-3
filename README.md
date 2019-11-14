# GS6 Project
Download/clone then `npm install`.

## Tools

Project Organisation Tool : [Trello](https://www.trello.com)  
Framework : [Angular](https://angular.io/start)  
Prototype : [Adobe XD](https://www.adobe.com/hu/products/xd.html)  
Communication : [WhatsApp](https://whatsapp.com)  

## Tasks

Barbara - Information Component  
Markus - Product Component  
Mattias - News Component  
Laszlo - HTML & CSS & Testimonials Component & Organisation

We use Trello for Project Organisation, and Angular as a Framework for better structure.  
With Angular we organized the project so, that we have 3 components, so everyone can work on one component, without merging problems.

---

# Project Structure

We have the static and dynamic content seperated in two folders

Static content : `basic/`  
Dynamic content : `pages/`

## News Component
Path : `pages/news`  
Author : [Mattias](https://github.com/mattias-r)  

`What?` : News page with content.  
`How?` : The whole content of the page will be created with ngFor*. A button let you show more information.

## Products Component
Path : `pages/products`  
Author : [Markus](https://github.com/MarkusGehmayer)  

`What?` : products site, sign up form incl. some css effects. At the landing page the gs6 text animation.  
`How?` : take the data from a json object and insert it with angular via *ngFor. Write a little function for the modal box (sign up form). 

## Information Component
Path : `pages/information`  
Author : [Barbara](https://github.com/barbaraani)  

`What?` : Teachers (plus CSS with effect), Course Room image + iframe google maps, technologies (list of techs with additional info on button click)  
`How?` :saved data in the TS and applied it in the HTML via {{}} with *ngFor  

## Testimonials Component
Path : `pages/testimonials`  
Author : [Laszlo](https://github.com/voidlaszlo)  

`What?` : Comments
`How?` : There is an isLoggedIn boolean in the component.ts file, and when it's true, you can leave a comment there.  
To set this true, you have to log in.
