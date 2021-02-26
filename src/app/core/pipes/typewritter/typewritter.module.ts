import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Pipes
import { TypewritterPipe } from './typewritter.pipe';

@NgModule({
  declarations: [TypewritterPipe],
  imports: [CommonModule],
  exports: [TypewritterPipe],
})
export class TypewritterModule { }
