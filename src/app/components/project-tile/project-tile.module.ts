import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { ProjectTileComponent } from './project-tile.component';

@NgModule({
  declarations: [ProjectTileComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ProjectTileComponent],
})
export class ProjectTileModule { }
