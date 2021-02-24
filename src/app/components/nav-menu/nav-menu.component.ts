import { Component, Input, OnDestroy, HostListener, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnDestroy {

  @Input() public buttonIcon = 'bx bx-menu'; // Button icon
  @Output() public stateChange: EventEmitter<boolean> = new EventEmitter();

  private routerSub: Subscription;
  public isShown = false;

  constructor(
    private router: Router,
  ) {
    // Close menu when the route is change
    this.routerSub = this.router.events.subscribe(() => {
      this.isShown = false;
    });
  }

  public ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  /**
   * Function is a host listener waiting for the esc key to be pressed
   * to close the menu.
   *
   * @param event Keyboard event.
   */
  @HostListener('document:keydown.escape', ['$event'])
  private escapeMenu() {
    this.isShown = false;
  }

  /**
   * Trigger menu on button click.
   */
  public toggleMenu(): void {
    this.isShown = !this.isShown;
    this.stateChange.emit(this.isShown);
  }

  /**
   * Returns the property to show or hide the menu with
   * an animation.
   */
  get stateName(): 'show' | 'hide' {
    return this.isShown ? 'show' : 'hide';
  }

}
