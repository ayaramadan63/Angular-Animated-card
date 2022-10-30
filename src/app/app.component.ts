import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animated Product Card';

  url: string[] = [
    "../assets/img1.jpg",
    "../assets/img2.jpg",
    "../assets/img3.jpg",

  ]



}
