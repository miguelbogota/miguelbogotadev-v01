import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { ComingSoonComponent } from './coming-soon.component';

@NgModule({
  declarations: [ComingSoonComponent],
  exports: [ComingSoonComponent],
  imports: [CommonModule],
})
export class ComingSoonModule { }
