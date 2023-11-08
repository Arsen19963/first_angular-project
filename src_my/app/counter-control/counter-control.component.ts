import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.css'],
})
export class CounterControlComponent {
  counter: number = 0;
  @Output() incrementEvent = new EventEmitter<number>();
  @Output() decrementEvent = new EventEmitter<number>();

  increment() {
    this.counter++;
    this.incrementEvent.emit(this.counter);
  }
  decrement() {
    this.counter--;
    this.decrementEvent.emit(this.counter);
  }
}
