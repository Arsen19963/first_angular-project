import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {
    this._elementRef.nativeElement.style.backgroundColor = 'red';
  }

  
}
