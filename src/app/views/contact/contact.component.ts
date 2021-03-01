import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppContent } from '@app-core/models/content.model';
import { ContentService } from '@app-core/services/content/content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('copiedMessageAnimation', [
      transition(
        ':enter', [
          style({ opacity: 0 }),
          animate('600ms 400ms linear', style({ opacity: 1 })),
        ],
      ),
      transition(
        ':leave', [
          style({ opacity: 1 }),
          animate('300ms linear', style({ opacity: 0 })),
        ],
      ),
    ]),
  ],
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(
    public contentService: ContentService,
    private router: Router,
  ) { }

  private contentSubscription: Subscription | null = null;
  public hasBeenCopied = false;

  public content: AppContent | null = null;

  public ngOnInit(): void {
    this.contentSubscription = this.contentService.getContent().subscribe(content => this.content = content);
  }

  public ngOnDestroy(): void {
    this.contentSubscription?.unsubscribe();
  }

  /**
   * Shows the copied message for a few secods.
   */
  private showCopiedMessage(): void {
    this.hasBeenCopied = true;
    setTimeout(() => this.hasBeenCopied = false, 2000);
  }

  /**
   * Request for access to copy to the clipboard and copies it.
   */
  public copyToClipboard(): void {
    navigator.clipboard.writeText('miguelbogota.dev@outlook.com')
      .then(() => this.showCopiedMessage())
      .catch((err) => console.error('Could not copy text: ', err));
  }

  /**
   * Bind swipe right to the navigation.
   */
  @HostListener('swiperight')
  public moveToTheLeft() {
    this.router.navigate(['/']);
  }

}
