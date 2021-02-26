import { Component } from '@angular/core';
import { ContentService } from '@app-core/services/content/content.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {

  constructor(
    public contentService: ContentService,
  ) { }

}
