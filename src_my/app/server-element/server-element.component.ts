import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  constructor() {
    console.log('%c Constructor called!', 'color: red');
  }
  @ContentChild('contentParagraph') paragraph: ElementRef;
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('%c ngOnChanges called', 'color: green');
    console.log('changes', changes);
  }
  ngOnInit() {
    console.log('%c ngOnInit called!', 'color: blue');
    console.log(`Text content of paragraph : ${this.paragraph.nativeElement.textContent}`);
  }
  ngDoCheck() {
    console.log('%c ngDoCheck called!', 'color: purple');
  }
  ngAfterContentInit() {
    console.log(`Text content of paragraph : ${this.paragraph.nativeElement.textContent}`);
    console.log('%c ngAfterContentInit called', 'color: #B9E235');
  }
  ngAfterContentChecked() {
    console.log('%c ngAfterContentChecked called', 'color: #00ECA5');
  }

  ngAfterViewInit() {
    console.log('%c ngAfterViewInit called', 'color: #EC6200');
    console.log(
      '%c Text content: ' + this.header.nativeElement.textContent,
      'color: darkblue'
    );
  }
  ngAfterViewChecked() {
    console.log('%c ngAfterViewChecked called', 'color: #C593D9');
  }
  ngOnDestroy() {
    console.log('%c ngOnDestroy called', 'color: #A10000');
  }
}
