import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { EvenComponent } from './even/even.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { CounterControlComponent } from './counter-control/counter-control.component';
import { IncrementComponent } from './increment/increment.component';
import { DecrementComponent } from './decrement/decrement.component';

@NgModule({
  declarations: [AppComponent, CockpitComponent, ServerElementComponent, EvenComponent, GameControlComponent, OddComponent, CounterControlComponent, IncrementComponent, DecrementComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
