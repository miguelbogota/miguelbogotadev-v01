import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing.module';
// Components
import { ProfileComponent } from './profile.component';
// Imported Components
import { CoverModule } from '@app-components/cover/cover.module';
import { HeadlineModule } from '@app-components/headline/headline.module';
import { FooterModule } from '@app-components/footer/footer.module';
import { ProjectsModule } from '@app-components/projects/projects.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CoverModule,
    HeadlineModule,
    FooterModule,
    ProjectsModule,
  ],
})
export class ProfileModule { }
