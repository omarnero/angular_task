import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'A-task';
  constructor(private translateService: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    console.log(localStorage.getItem('lang'));
    const lang = localStorage.getItem('lang');
    this.translateService.use(lang || 'en');
    document.documentElement.lang = lang;
  }
}
