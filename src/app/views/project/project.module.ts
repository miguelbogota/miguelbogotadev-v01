import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project.routing.module';
// Components
import { ProjectComponent } from './project.component';
// Imported Components
import { ImageSliderModule } from '@app-components/image-slider/image-slider.module';
import { FooterModule } from '@app-components/footer/footer.module';
import { SpinnersModule } from '@app-components/spinners/spinners.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ImageSliderModule,
    FooterModule,
    SpinnersModule,
  ],
})
export class ProjectModule { }
