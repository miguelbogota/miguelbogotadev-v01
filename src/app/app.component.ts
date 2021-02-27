import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { NavigationService } from '@app-core/services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  template: `
    <!-- Container for the whole page -->
    <div class="container">
    <!-- Toolbar with the navigation and the account information -->
    <app-toolbar></app-toolbar>
      <!-- Routing to all the views -->
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [':host { display: block }'],
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
}
