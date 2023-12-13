import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Output() hideOffcanvas = new EventEmitter<void>();

  onButtonClick() {
    this.hideOffcanvas.emit();
  }
}
