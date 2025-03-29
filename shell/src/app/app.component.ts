import { ButtonComponent, CardComponent } from '@ahmedfahim21/ui-library';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CardComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell';
}
