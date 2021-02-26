import { Component } from '@angular/core';
import { ContentService } from '@app-core/services/content/content.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  constructor(
    public contentService: ContentService,
  ) { }

  public navigationLinks = [
    { path: 'works', label: 'works' },
    { path: '', label: 'profile' },
    { path: 'contact', label: 'contact' },
  ];

}
