import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppContent } from '@app-core/models/content.model';
import { ContentService } from '@app-core/services/content/content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {

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
