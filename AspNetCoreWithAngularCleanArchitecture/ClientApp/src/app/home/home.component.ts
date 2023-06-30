import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor() {
    console.log("Hola...");
    console.log("Mundo");
  }
}
