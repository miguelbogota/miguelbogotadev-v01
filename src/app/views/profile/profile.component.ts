import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppContent } from '@app-core/models/content.model';
import { ContentService } from '@app-core/services/content/content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(
    public contentService: ContentService,
    private router: Router,
  ) { }

  private contentSubscription: Subscription | null = null;

  public content: AppContent | null = null;

  public ngOnInit(): void {
    this.contentSubscription = this.contentService.getContent().subscribe(content => this.content = content);
  }

  public ngOnDestroy(): void {
    this.contentSubscription?.unsubscribe();
  }

  /**
   * Bind swipe right to the navigation.
   */
  @HostListener('swiperight')
  public moveToTheLeft() {
    this.router.navigate(['/works']);
  }

  /**
   * Bind swipe left to the navigation.
   */
  @HostListener('swipeleft')
  public moveToTheRight() {
    this.router.navigate(['/contact']);
  }

}
