import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '@app-core/services/content/content.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {

  constructor(
    public contentService: ContentService,
    private router: Router,
  ) { }

  /**
   * Bind swipe left to the navigation.
   */
  @HostListener('swipeleft')
  public moveToTheRight() {
    this.router.navigate(['/']);
  }

}
