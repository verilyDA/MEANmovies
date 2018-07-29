import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewAddComponent } from './review-add/review-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieAddComponent,
    ReviewListComponent,
    ReviewAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
