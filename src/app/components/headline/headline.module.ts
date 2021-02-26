import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { HeadlineComponent } from './headline.component';
// Imported Components
import { TypewritterModule } from '@app-core/pipes/typewritter/typewritter.module';

@NgModule({
  declarations: [HeadlineComponent],
  imports: [
    CommonModule,
    TypewritterModule,
  ],
  exports: [HeadlineComponent],
})
export class HeadlineModule { }
