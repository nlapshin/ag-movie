import { Component } from '@angular/core';

import { MovieService } from './movie.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  constructor(
    private movieService: MovieService
  ) {}

  movie: any = null

  ngOnInit() {
    this.movieService.findMovie('Shrek').subscribe((res) => {
      this.movie = res
    })
  }
}
