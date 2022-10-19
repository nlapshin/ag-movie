import { Component } from '@angular/core';

import { MovieService } from './movie.service';

// Как подключить стили?
// 1. Создавть файл movie.component.css
// в той же папке
// 2. Прописать в комопненте
// styleUrls: ['./movie.component.css']
// 3. Перезапустить сервер
// npm run start

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
