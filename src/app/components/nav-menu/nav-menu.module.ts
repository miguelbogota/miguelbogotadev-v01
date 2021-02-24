import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { NavMenuComponent } from './nav-menu.component';

@NgModule({
  declarations: [NavMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavMenuComponent],
})
export class NavMenuModule { }
