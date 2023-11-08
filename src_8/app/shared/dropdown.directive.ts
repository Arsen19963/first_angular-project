import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  // Correctly applying the decorator to the class
  selector: '[appDropdown]',
  exportAs: 'appDropdown',
})
export class DropdownDirective {
  // private wasInside = false; // Consider whether this is needed for your logic
  @HostBinding('class.show') isOpen = false;

  constructor(private _elementRef: ElementRef) {}

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  //   // this.wasInside = true;
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // if (!this._elementRef.nativeElement.contains(event.target)) {
    //   this.isOpen = false;
    // }
    this.isOpen = this._elementRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  // Optionally, add other methods or lifecycle hooks if needed
}
