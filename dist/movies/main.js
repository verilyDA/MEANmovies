(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movie-list/movie-list.component.ts");
/* harmony import */ var _movie_add_movie_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-add/movie-add.component */ "./src/app/movie-add/movie-add.component.ts");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review-list/review-list.component */ "./src/app/review-list/review-list.component.ts");
/* harmony import */ var _review_add_review_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review-add/review-add.component */ "./src/app/review-add/review-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: 'full', component: _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__["MovieListComponent"] },
    { path: 'movies', component: _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_2__["MovieListComponent"] },
    { path: 'movies/new', component: _movie_add_movie_add_component__WEBPACK_IMPORTED_MODULE_3__["MovieAddComponent"] },
    { path: 'movies/:id', component: _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_4__["ReviewListComponent"] },
    { path: 'movies/:id/review', component: _review_add_review_add_component__WEBPACK_IMPORTED_MODULE_5__["ReviewAddComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: Arial, Helvetica, sans-serif; \r\n}\r\n.delete{\r\n    background: red;\r\n    text-transform: uppercase;\r\n}\r\n.submit{\r\n    background: linear-gradient(#8a9fcc, black);\r\n}\r\n.cancel{\r\n    background: linear-gradient(#bc9764, black);\r\n}\r\n.read{\r\n    background: linear-gradient(#ccc98a, black);\r\n}\r\nbutton{\r\n    color: white;\r\n    background: linear-gradient(#8fc69a, black);\r\n    padding: 5px 10px;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n}\r\ntable, th, td{\r\n    border-collapse: collapse;\r\n    border: 1px solid black;\r\n    padding: 4px;\r\n    font-size: 20px;\r\n}\r\ntr:nth-child(odd){\r\n    background: #ccc;\r\n}\r\nth{\r\n    font-weight: bold;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Squishy Tomatoes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movie-list/movie-list.component.ts");
/* harmony import */ var _movie_add_movie_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-add/movie-add.component */ "./src/app/movie-add/movie-add.component.ts");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review-list/review-list.component */ "./src/app/review-list/review-list.component.ts");
/* harmony import */ var _review_add_review_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review-add/review-add.component */ "./src/app/review-add/review-add.component.ts");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_4__["MovieListComponent"],
                _movie_add_movie_add_component__WEBPACK_IMPORTED_MODULE_5__["MovieAddComponent"],
                _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_6__["ReviewListComponent"],
                _review_add_review_add_component__WEBPACK_IMPORTED_MODULE_7__["ReviewAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [
                _movie_service__WEBPACK_IMPORTED_MODULE_8__["MovieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/movie-add/movie-add.component.html":
/*!****************************************************!*\
  !*** ./src/app/movie-add/movie-add.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend><h2>Add a Movie</h2></legend>\n  <div *ngIf='errMsg'>\n    {{ errMsg }}\n  </div>\n  Movie Title:<input #title><br>\n  Your Name:<input #name><br>\n  Stars:<input type='number' min='1' max='5' #stars><br>\n  Your Review:<input #review style='height:50px; width:100px'><br>\n  <button (click)='submit(title.value, name.value, stars.value, review.value)'>\n    Submit</button>\n     - \n  <button (click)='cancel()'>Cancel</button>\n</fieldset>"

/***/ }),

/***/ "./src/app/movie-add/movie-add.component.ts":
/*!**************************************************!*\
  !*** ./src/app/movie-add/movie-add.component.ts ***!
  \**************************************************/
/*! exports provided: MovieAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieAddComponent", function() { return MovieAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../review */ "./src/app/review.ts");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie */ "./src/app/movie.ts");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieAddComponent = /** @class */ (function () {
    function MovieAddComponent(service, router, ar) {
        this.service = service;
        this.router = router;
        this.ar = ar;
        this.movie = new _movie__WEBPACK_IMPORTED_MODULE_3__["Movie"]();
        this.review = new _review__WEBPACK_IMPORTED_MODULE_2__["Review"]();
        this.movies = [];
        this.reviews = [];
        this.errMsg = '';
    }
    MovieAddComponent.prototype.ngOnInit = function () {
    };
    MovieAddComponent.prototype.submit = function (title, name, stars, review) {
        var _this = this;
        if (title.length < 3) {
            this.errMsg = 'Movie title is too short, must be more than 3 characters in length';
        }
        if (name.length < 3) {
            this.errMsg = 'Your name must be longer than 3 characters';
        }
        if (stars < 1 || stars > 5) {
            this.errMsg = 'Star rating must be between 1 and 5';
        }
        if (review.length < 3) {
            this.errMsg = "Reviews must be longer than 3 characters";
        }
        if (title.length > 2 && name.length > 2 && stars > 0 && stars < 6 && review.length > 2) {
            this.service.addMovie({ title: title })
                .subscribe(function (movieAdded) {
                _this.movies.push(movieAdded);
                _this.review = {
                    name: name,
                    stars: stars,
                    review: review,
                    for_movie: movieAdded._id
                };
                _this.service.addReview(_this.review)
                    .subscribe(function (review) {
                    _this.reviews.push(review);
                    _this.router.navigateByUrl('');
                });
            });
        }
    };
    MovieAddComponent.prototype.cancel = function () {
        this.router.navigateByUrl('');
    };
    MovieAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-add',
            template: __webpack_require__(/*! ./movie-add.component.html */ "./src/app/movie-add/movie-add.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MovieAddComponent);
    return MovieAddComponent;
}());



/***/ }),

/***/ "./src/app/movie-list/movie-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend><h2>Movie List</h2></legend>\n  <button (click)='addMovie()'>Add New Movie</button>\n  <table>\n    <tr>\n      <th>Movie Title</th>\n      <th>Available Actions</th>\n    </tr>\n    <tr *ngFor=\"let movie of movies\">\n      <td>{{ movie.title }}</td>\n      <td>\n        <button class='read' (click)='readReview(movie._id)'>Read Reviews</button>\n        <button class='write' (click)='writeReview(movie._id)'>Write Review</button>\n      </td>\n    </tr>\n  </table>\n</fieldset>"

/***/ }),

/***/ "./src/app/movie-list/movie-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.ts ***!
  \****************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(service, router) {
        this.service = service;
        this.router = router;
        this.movies = [];
    }
    MovieListComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MovieListComponent.prototype.getMovies = function () {
        var _this = this;
        this.service.getMovies()
            .subscribe(function (movies) { return _this.movies = movies; });
    };
    MovieListComponent.prototype.addMovie = function () {
        this.router.navigateByUrl('/movies/new');
    };
    MovieListComponent.prototype.readReview = function (id) {
        this.router.navigateByUrl('/movies/' + id);
    };
    MovieListComponent.prototype.writeReview = function (id) {
        this.router.navigateByUrl('/movies/' + id + '/review');
    };
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.movieUrl = '/api/movie/';
        this.reviewUrl = '/api/review/';
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get(this.movieUrl);
    };
    MovieService.prototype.getMovieByName = function (name) {
        return this.http.get(this.movieUrl + name);
    };
    MovieService.prototype.getMovieById = function (id) {
        return this.http.get(this.movieUrl + id);
    };
    MovieService.prototype.addMovie = function (movie) {
        return this.http.post(this.movieUrl, movie);
    };
    MovieService.prototype.getReviews = function (id) {
        return this.http.get(this.reviewUrl + id);
    };
    MovieService.prototype.addReview = function (review) {
        return this.http.post(this.reviewUrl, review);
    };
    MovieService.prototype.deleteMovie = function (id) {
        return this.http.delete(this.movieUrl + id);
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/movie.ts":
/*!**************************!*\
  !*** ./src/app/movie.ts ***!
  \**************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/review-add/review-add.component.html":
/*!******************************************************!*\
  !*** ./src/app/review-add/review-add.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend><h2>Add a review for {{ movie.title }}</h2></legend>\n  <div *ngIf='errMsg'>\n    {{ errMsg }}\n  </div>\n  Your Name:<input #name><br>\n  Stars:<input type='number' min='1' max='5' #stars><br>\n  Your Review:<input #review style='height:50px; width:100px'><br>\n  <button class='submit' (click)='submit(name.value, stars.value, review.value)'>\n    Submit</button>\n     - \n  <button class='cancel' (click)='cancel()'>Cancel</button>\n</fieldset>"

/***/ }),

/***/ "./src/app/review-add/review-add.component.ts":
/*!****************************************************!*\
  !*** ./src/app/review-add/review-add.component.ts ***!
  \****************************************************/
/*! exports provided: ReviewAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAddComponent", function() { return ReviewAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie */ "./src/app/movie.ts");
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../review */ "./src/app/review.ts");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewAddComponent = /** @class */ (function () {
    function ReviewAddComponent(service, router, ar) {
        this.service = service;
        this.router = router;
        this.ar = ar;
        this.movie = new _movie__WEBPACK_IMPORTED_MODULE_2__["Movie"]();
        this.review = new _review__WEBPACK_IMPORTED_MODULE_3__["Review"]();
        this.movies = [];
        this.reviews = [];
        this.errMsg = '';
    }
    ReviewAddComponent.prototype.ngOnInit = function () {
        this.getMovie();
    };
    ReviewAddComponent.prototype.getMovie = function () {
        var _this = this;
        var id = this.ar.snapshot.params['id'];
        this.service.getMovieById(id)
            .subscribe(function (movie) { return _this.movie = movie; });
    };
    ReviewAddComponent.prototype.submit = function (name, stars, review) {
        var _this = this;
        if (name.length < 3) {
            this.errMsg = 'Your name must be longer than 3 characters';
        }
        if (stars < 1 || stars > 5) {
            this.errMsg = 'Star rating must be between 1 and 5';
        }
        if (review.length < 3) {
            this.errMsg = "Reviews must be longer than 3 characters";
        }
        if (name.length > 2 && stars > 0 && stars < 6 && review.length > 2) {
            this.review = {
                name: name,
                stars: stars,
                review: review,
                for_movie: this.ar.snapshot.params['id']
            };
            this.service.addReview(this.review)
                .subscribe(function (review) {
                _this.reviews.push(review);
                _this.router.navigateByUrl('');
            });
        }
    };
    ReviewAddComponent.prototype.cancel = function () {
        this.router.navigateByUrl('');
    };
    ReviewAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-add',
            template: __webpack_require__(/*! ./review-add.component.html */ "./src/app/review-add/review-add.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ReviewAddComponent);
    return ReviewAddComponent;
}());



/***/ }),

/***/ "./src/app/review-list/review-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/review-list/review-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class='delete' (click)='delete(movie._id)'>Delete Movie</button>\n<fieldset>\n  <legend><h2>Reviews for {{ movie.title }}</h2></legend>\n  <table>\n    <tr>\n      <th>Reviewer</th>\n      <th>Stars</th>\n      <th>Review</th>\n    </tr>\n    <tr *ngFor='let review of reviews'>\n      <td>{{ review.name }}</td>\n      <td>{{ review.stars }}</td>\n      <td>{{ review.review }}</td>\n    </tr>\n  </table>\n</fieldset>"

/***/ }),

/***/ "./src/app/review-list/review-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/review-list/review-list.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListComponent", function() { return ReviewListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie */ "./src/app/movie.ts");
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../review */ "./src/app/review.ts");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewListComponent = /** @class */ (function () {
    function ReviewListComponent(service, router, ar) {
        this.service = service;
        this.router = router;
        this.ar = ar;
        this.movie = new _movie__WEBPACK_IMPORTED_MODULE_2__["Movie"]();
        this.review = new _review__WEBPACK_IMPORTED_MODULE_3__["Review"]();
        this.movies = [];
        this.reviews = [];
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    ReviewListComponent.prototype.getReviews = function () {
        var _this = this;
        var id = this.ar.snapshot.params['id'];
        this.service.getReviews(id)
            .subscribe(function (reviews) { return _this.reviews = reviews; });
        this.service.getMovieById(id)
            .subscribe(function (movie) { return _this.movie = movie; });
    };
    ReviewListComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.deleteMovie(id)
            .subscribe(function () {
            _this.router.navigateByUrl('');
        });
    };
    ReviewListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-list',
            template: __webpack_require__(/*! ./review-list.component.html */ "./src/app/review-list/review-list.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ReviewListComponent);
    return ReviewListComponent;
}());



/***/ }),

/***/ "./src/app/review.ts":
/*!***************************!*\
  !*** ./src/app/review.ts ***!
  \***************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\djaue\Documents\MEANmovies\movies\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map