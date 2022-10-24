import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-simple';
  initCounter = 100500;

  buttonText = 'Скрыть кнопку'

  style: any = {
    backgroundColor: 'red',
    color: 'blue',
    display: 'block'
  }

  toogleDisplay() {
    if (this.style.display === 'none') {
      this.buttonText = 'Скрывать кнопку'
      this.style.display = 'block'
    } else {
      this.buttonText = 'Показывать кнопку'
      this.style.display = 'none'
    }
  }

  decCounter(value: number) {
    this.initCounter = this.initCounter - value
  }

  incCounter(value: number) {
    this.initCounter = this.initCounter + value
  }


}

// Есть input и блок.
// Вводим цвет в input(например, red) и блок меняет цвет.
// 
// Добавить кнопку которая показывает или скрывает блок
// 1. Добавить атрибут (click) + метод
// 2. Скрыть элемент this.style.display = 'none'
// 3. Менять отображение: проверять значение this.style.display
// и менять на противоположное.