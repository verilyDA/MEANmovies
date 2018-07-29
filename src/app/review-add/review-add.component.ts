import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { Review } from '../review';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['../app.component.css']
})
export class ReviewAddComponent implements OnInit {
  movie: Movie = new Movie();
  review: Review = new Review();
  movies: Movie[] = [];
  reviews: Review[] = [];
  errMsg = '';

  constructor(
    private service: MovieService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMovie();
  }
  getMovie(): void {
    const id = this.ar.snapshot.params['id'];
    this.service.getMovieById(id)
      .subscribe(movie => this.movie = movie);
  }
  submit(name: string, stars: number, review:string): void {
    if(name.length < 3){
      this.errMsg = 'Your name must be longer than 3 characters';
    }
    if(stars < 1 || stars > 5){
      this.errMsg = 'Star rating must be between 1 and 5';
    }
    if(review.length < 3){
      this.errMsg = "Reviews must be longer than 3 characters";
    }
    if(name.length > 2 && stars > 0 && stars < 6 && review.length > 2){
      this.review = {
      name: name,
      stars: stars,
      review: review,
      for_movie: this.ar.snapshot.params['id']
      };
    this.service.addReview(this.review)
      .subscribe(review => {
        this.reviews.push(review);
        this.router.navigateByUrl('');
      });
    }
  }
  cancel(): void {
    this.router.navigateByUrl('');
  }
}
