import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ButtonComponent, CommonModule], 
  exports: [ButtonComponent]
})
export class ButtonModule { }
