import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project.routing.module';
// Components
import { ProjectComponent } from './project.component';
// Imported Components
import { FooterModule } from '@app-components/footer/footer.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FooterModule,
  ],
})
export class ProjectModule { }
