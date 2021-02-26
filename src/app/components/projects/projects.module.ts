import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { ProjectsComponent } from './projects.component';
// Imported Components
import { ProjectTileModule } from '@app-components/project-tile/project-tile.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProjectTileModule,
  ],
  exports: [ProjectsComponent],
})
export class ProjectsModule { }
