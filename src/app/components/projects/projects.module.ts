import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Components
import { ProjectsComponent } from './projects.component';
// Imported Components
import { ProjectTileModule } from '@app-components/project-tile/project-tile.module';
import { SpinnersModule } from '@app-components/spinners/spinners.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProjectTileModule,
    SpinnersModule,
  ],
  exports: [ProjectsComponent],
})
export class ProjectsModule { }
