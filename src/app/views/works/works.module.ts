import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksRoutingModule } from './works.routing.module';
// Components
import { WorksComponent } from './works.component';
// Imported Components
import { CoverModule } from '@app-components/cover/cover.module';
import { HeadlineModule } from '@app-components/headline/headline.module';
import { FooterModule } from '@app-components/footer/footer.module';
import { ProjectsModule } from '@app-components/projects/projects.module';

@NgModule({
  declarations: [WorksComponent],
  imports: [
    CommonModule,
    WorksRoutingModule,
    CoverModule,
    HeadlineModule,
    FooterModule,
    ProjectsModule,
  ],
  exports: [WorksComponent],
})
export class WorksModule { }
