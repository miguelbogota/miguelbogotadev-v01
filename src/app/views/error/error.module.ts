import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error.routing.module';
import { RouterModule } from '@angular/router';
// Components
import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ErrorRoutingModule,
  ],
})
export class ErrorModule { }
