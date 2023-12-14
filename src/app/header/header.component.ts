import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  lang: any;
  constructor() {
    this.lang = localStorage.getItem('lang');
  }
  ngOnInit() {
    this.lang = localStorage.getItem('lang');
  }
  setAr() {
    this.lang = 'ar';
    localStorage.setItem('lang', this.lang);
    window.location.reload();
  }
  setEn() {
    this.lang = 'en';
    localStorage.setItem('lang', this.lang);
    window.location.reload();
  }
}
