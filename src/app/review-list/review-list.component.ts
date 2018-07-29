import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { Review } from '../review';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['../app.component.css']
})
export class ReviewListComponent implements OnInit {
  movie: Movie = new Movie();
  review: Review = new Review();
  movies: Movie[] = [];
  reviews: Review[] = [];

  constructor(
    private service: MovieService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getReviews();
  }
  getReviews(): void{
    const id = this.ar.snapshot.params['id'];
    this.service.getReviews(id)
      .subscribe(reviews => this.reviews = reviews);
    this.service.getMovieById(id)
      .subscribe(movie => this.movie = movie);
  }
  delete(id: string): void {
    this.service.deleteMovie(id)
      .subscribe(() => {
        this.router.navigateByUrl('');
      });
  }

}
