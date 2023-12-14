import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieticketComponent } from './movieticket/movieticket.component';
import { UsersComponent } from './users/users.component';
import { GraphComponent } from './graph/graph.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieticketComponent,
    UsersComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
