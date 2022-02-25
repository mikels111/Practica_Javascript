import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AprendiendoAngular';

  // https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
  onActivate(event: any) {
    let pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, 0); // how far to scroll on each step
    }
    // Esto es para que lo haga con una transición
    // let scrollToTop = window.setInterval(() => {
    //   let pos = window.pageYOffset;
    //   if (pos > 0) {
    //     window.scrollTo(0, pos - 1); // how far to scroll on each step
    //   } else {
    //     window.clearInterval(scrollToTop);
    //   }
    // }, 1);
  }
}
