import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Review } from '../review';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['../app.component.css']
})
export class MovieAddComponent implements OnInit {
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
  }
  submit(title: string, name: string, stars: number, review:string): void {
    if(title.length < 3){
      this.errMsg = 'Movie title is too short, must be more than 3 characters in length';
    }
    if(name.length < 3){
      this.errMsg = 'Your name must be longer than 3 characters';
    }
    if(stars < 1 || stars > 5){
      this.errMsg = 'Star rating must be between 1 and 5';
    }
    if(review.length < 3){
      this.errMsg = "Reviews must be longer than 3 characters";
    }
    if( title.length > 2 && name.length > 2 && stars > 0 && stars < 6 && review.length > 2){
      this.service.addMovie({title} as Movie)
        .subscribe(movieAdded => {
          this.movies.push(movieAdded);
          this.review = {
            name: name,
            stars: stars,
            review: review,
            for_movie: movieAdded._id
          };
          this.service.addReview(this.review)
            .subscribe(review => {
            this.reviews.push(review);
            this.router.navigateByUrl('');
        });
      });
    }
  }
  cancel(): void {
    this.router.navigateByUrl('');
  }

}
