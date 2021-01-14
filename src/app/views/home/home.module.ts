import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing.module';
// Imported components
import { ComingSoonModule } from '@app-components/coming-soon/coming-soon.module';
// Components
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // Imported components
    ComingSoonModule,
  ],
})
export class HomeModule { }
