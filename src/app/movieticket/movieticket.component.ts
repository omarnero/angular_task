import { Component } from '@angular/core';

@Component({
  selector: 'app-movieticket',
  templateUrl: './movieticket.component.html',
  styleUrl: './movieticket.component.css',
})
export class MovieticketComponent {
  lang: string;
  constructor() {
    this.lang = localStorage.getItem('lang');
  }
  discount = 25;
  date = 'July 15, 2023';
}
