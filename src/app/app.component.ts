import { Component, OnInit } from '@angular/core';
// import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: `
    <!-- Toolbar with the navigation and the account information -->
    <app-toolbar></app-toolbar>
    <!-- Container for the whole page -->
    <div class="container">
      <!-- Routing to all the views -->
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [':host { display: block }'],
})
export class AppComponent implements OnInit {

  constructor(
    // private swUpdate: SwUpdate,
  ) { }

  public ngOnInit(): void {
    this.checkForUpdates();
  }

  /**
   * Checks if an update is available and refresh the page.
   */
  private checkForUpdates(): void {
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.available.subscribe(() => {
    //     // Message to the user to update and reload page
    //     if (confirm('New update available! Whould you like to update?')) { window.location.reload(); }
    //   });
    // }
  }
}
