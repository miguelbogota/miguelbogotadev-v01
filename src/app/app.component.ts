import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { NavigationService } from '@app-core/services/navigation/navigation.service';
import { slideInAnimation } from './routing-animations';

@Component({
  selector: 'app-root',
  template: `
    <!-- Container for the whole page -->
    <div class="container" [@routeAnimations]="prepareRoute(outlet)">
    <!-- Toolbar with the navigation and the account information -->
    <app-toolbar></app-toolbar>
      <!-- Routing to all the views -->
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styles: [':host { display: block }'],
  animations: [
    slideInAnimation,
  ],
})
export class AppComponent implements OnInit {

  constructor(
    private swUpdate: SwUpdate,
    public navigation: NavigationService, // Added to load the initial state
  ) { }

  public ngOnInit(): void {
    this.checkForUpdates();
  }

  /**
   * Checks if an update is available and refresh the page.
   */
  private checkForUpdates(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        // Message to the user to update and reload page
        if (confirm('New update available! Whould you like to update?')) { window.location.reload(); }
      });
    }
  }

  /**
   * Prepares the router for the animations.
   *
   * @param outlet Router outlet in the template.
   */
  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
