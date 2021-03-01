import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { CubeGridComponent } from './cube-grid/cube-grid.component';

const components = [
  CubeGridComponent,
];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class SpinnersModule { }
