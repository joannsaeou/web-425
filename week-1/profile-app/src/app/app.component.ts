import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message =  'Hello, You are now in Joann Saeou&#0039;s world!';
  assignment: string = 'Assignment 1.5 - Components';
  favFood: string =  'curry - Components';
  favColor: string =  'rainbow - Components';
}
