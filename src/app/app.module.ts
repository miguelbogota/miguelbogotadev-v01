import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Additionals
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
// Main app
import { environment } from '@app-env';
import { AppComponent } from './app.component';
// Modules
import { FireModule } from './fire.module';
import { ToolbarModule } from '@app-components/toolbar/toolbar.module'; // Toolbar will be use in all the views

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HammerModule,
    // Additionals
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // Modules
    FireModule,
    ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
