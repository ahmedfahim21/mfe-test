import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';

@NgModule({
  imports: [CardComponent], // Import the standalone component
  exports: [CardComponent] // Export so it can be used outside
})
export class CardModule { }
