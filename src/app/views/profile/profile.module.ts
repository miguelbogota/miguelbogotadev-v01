import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing.module';
// Components
import { ProfileComponent } from './profile.component';
// Imported Components
import { CoverModule } from '@app-components/cover/cover.module';
import { HeadlineModule } from '@app-components/headline/headline.module';
import { FooterModule } from '@app-components/footer/footer.module';
import { ArchivedPageNoticeModule } from '@app-components/archived-page-notice/archived-page-notice.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CoverModule,
    HeadlineModule,
    FooterModule,
    ArchivedPageNoticeModule,
  ],
})
export class ProfileModule { }
