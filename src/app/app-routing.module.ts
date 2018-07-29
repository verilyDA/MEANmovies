import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewAddComponent } from './review-add/review-add.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: MovieListComponent },
    { path: 'movies',  component: MovieListComponent },
    { path: 'movies/new',  component: MovieAddComponent },
    { path: 'movies/:id',  component: ReviewListComponent },
    { path: 'movies/:id/review',  component: ReviewAddComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
