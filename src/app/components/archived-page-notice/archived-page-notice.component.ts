import { Component, Input } from '@angular/core';
import { AppContent } from '@app-core/models/content.model';

@Component({
  selector: 'app-archived-page-notice',
  templateUrl: './archived-page-notice.component.html',
  styleUrls: ['./archived-page-notice.component.scss'],
})
export class ArchivedPageNoticeComponent {
  constructor() { }

  @Input()
  public content!: AppContent;
}
