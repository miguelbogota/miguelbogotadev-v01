import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Imported Components
import { TypewritterModule } from '@app-core/pipes/typewritter/typewritter.module';
// Components
import { HeadlineComponent } from './headline.component';

@NgModule({
  declarations: [HeadlineComponent],
  imports: [
    CommonModule,
    TypewritterModule,
  ],
  exports: [HeadlineComponent],
})
export class HeadlineModule { }
