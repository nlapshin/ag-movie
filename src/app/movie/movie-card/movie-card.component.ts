import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie: any = {} 
  // пометить, что это свойство
  // не просто а принимает входные данные
}
