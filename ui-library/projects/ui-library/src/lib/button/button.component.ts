import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  imports: [CommonModule], 
})
export class ButtonComponent {
  @Input() label: string = 'Click me';
}
