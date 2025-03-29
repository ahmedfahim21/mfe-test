import { NgModule } from '@angular/core';
import { ButtonModule } from './lib/button/button.module';
import { CardModule } from './lib/card/card.module';
@NgModule({
  imports: [ButtonModule, CardModule],
  exports: [ButtonModule, CardModule]   
})
export class UiLibraryModule { }
