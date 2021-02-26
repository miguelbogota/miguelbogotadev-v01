import { Component } from '@angular/core';
import { Route } from '@angular/router';
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

  public navigationLinks: Route[] = [
    { path: 'works' },
    { path: '' },
    { path: 'contact' },
  ];

}
