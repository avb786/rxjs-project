import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/Models/movie';
import { addMovies, getAllMovies } from 'src/app/Store/Actions/movie.action';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {
  newMovie: Movie = new Movie();

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getAllMovies()
  }

  getAllMovies() {
    this.store.dispatch(getAllMovies())
  }

  addMovie() {
    this.store.dispatch(addMovies(this.newMovie))
  }

}
