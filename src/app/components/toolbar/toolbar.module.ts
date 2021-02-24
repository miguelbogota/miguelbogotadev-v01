import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Imported Components
import { NavMenuModule } from '@app-components/nav-menu/nav-menu.module';
// Components
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavMenuModule,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule { }
