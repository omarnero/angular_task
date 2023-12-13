import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieticketComponent } from './movieticket/movieticket.component';
import { UsersComponent } from './users/users.component';
import { GraphComponent } from './graph/graph.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieticketComponent,
    UsersComponent,
    GraphComponent,
  ],
  imports: [BrowserModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
