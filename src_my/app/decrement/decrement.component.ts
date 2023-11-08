import { Component, Input } from '@angular/core';
import { OddComponent } from './../odd/odd.component';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css'],
})
export class DecrementComponent {
  @Input() decrementEvent!: number;
  message = '';

  OddComponent() {
    if (this.decrementEvent) {
      this.message = `Decrement to ${this.decrementEvent}`;
    }
  }
}
