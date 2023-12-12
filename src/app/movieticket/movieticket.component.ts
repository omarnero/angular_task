import { Component } from '@angular/core';

@Component({
  selector: 'app-movieticket',
  templateUrl: './movieticket.component.html',
  styleUrl: './movieticket.component.css',
})
export class MovieticketComponent {
  // fetch an api to get discount and date to clac it and store it in var
  discount = 25;
  date = 'July 15, 2023';
}
