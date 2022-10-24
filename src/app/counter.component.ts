import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
    @Input() value = 0
}

// 1. Создать counter.component.ts
// 1.1. Задать selector. Для нас counter
// 1.2. Задать путь до шаблона templateUrl
// ./counter.component.html
// 1.3. Дать новое имя компоненту CounterComponent
// 2. Создать counter.component.html
// 2.1. Записать нужный html в counter.component.html
// 3. Подключить его к app.module.ts
// import { CounterComponent } from './counter.component';
// И прописать в declarations
// 4. Использовать новый компонент counter
// Прописать в шаблоне app.component.html
// <counter></counter>