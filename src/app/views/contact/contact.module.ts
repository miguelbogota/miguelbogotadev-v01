import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact.routing.module';
// Components
import { ContactComponent } from './contact.component';
// Imported Components
import { CoverModule } from '@app-components/cover/cover.module';
import { HeadlineModule } from '@app-components/headline/headline.module';
import { FooterModule } from '@app-components/footer/footer.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    CoverModule,
    HeadlineModule,
    FooterModule,
  ],
})
export class ContactModule { }
