import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css'],
})
export class IncrementComponent {
  @Input() incrementEvent!: number;
  message = '';
  onIncrement() {
    if (this.incrementEvent) {
      this.message = `Increment to ${this.incrementEvent}  `;
    }
  }
}
