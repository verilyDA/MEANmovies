import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { Review } from './review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = '/api/movie/';
  private reviewUrl = '/api/review/';

  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl);
  }
  getMovieByName(name: string): Observable<Movie> {
    return this.http.get<Movie>(this.movieUrl + name);
  }
  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.movieUrl + id);
  }
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.movieUrl, movie);
  }
  getReviews(id: string): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewUrl + id);
  }
  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.reviewUrl, review);
  }
  deleteMovie(id: string): Observable<Movie> {
    return this.http.delete<Movie>(this.movieUrl + id);
  }
}
