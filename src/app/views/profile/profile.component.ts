import { Component, OnDestroy, OnInit } from '@angular/core';
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
  ) { }

  private contentSubscription: Subscription | null = null;

  public content: AppContent | null = null;

  public ngOnInit(): void {
    this.contentSubscription = this.contentService.getContent().subscribe(content => this.content = content);
  }

  public ngOnDestroy(): void {
    this.contentSubscription?.unsubscribe();
  }

}
