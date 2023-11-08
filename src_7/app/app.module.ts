import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './Directives/basic-highlight/basic-highlight.direcitive';
import { BetterHighlightDirective } from './Directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './Directives/unless/unless.directive';

@NgModule({
  declarations: [AppComponent, BasicHighlightDirective, BetterHighlightDirective, UnlessDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
