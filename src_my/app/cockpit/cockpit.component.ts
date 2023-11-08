import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @ViewChild('serverContentInput') serverContentInp: ElementRef;
  newServerName = '';
  // newServerContent = '';

  onAddServer() {
    
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInp.nativeElement.value,
    });
  }
  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverContentInp.nativeElement.value,
    });
  }
}
