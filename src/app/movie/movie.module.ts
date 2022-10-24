import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MovieService } from './movie.service'
import { MovieComponent } from './movie.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    MovieComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [MovieComponent],
  exports: [MovieComponent]
})
export class MovieModule { }

// npm run start
// localhost:4200