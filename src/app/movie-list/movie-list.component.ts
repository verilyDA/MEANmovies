import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['../app.component.css']
})
export class MovieListComponent implements OnInit {
  
  movies: Movie[] = [];

  constructor(
    private service: MovieService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.service.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  addMovie(): void {
    this.router.navigateByUrl('/movies/new');
  }

  readReview(id: string): void {
    this.router.navigateByUrl('/movies/' + id);
  }

  writeReview(id: string): void {
    this.router.navigateByUrl('/movies/' + id + '/review');
  }

}
