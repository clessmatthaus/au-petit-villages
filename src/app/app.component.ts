import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'au-petit-ville';

  isMenuScrolled = false;

  @HostListener('window:scroll', ['$event'])
  scrollCheck(){
    if(window.pageYOffset > 100)
    this.isMenuScrolled = true
    else
    this.isMenuScrolled = false
  }
  scrollToTop(){
    document.body.scrollIntoView({behavior: 'smooth'})
  }
}
