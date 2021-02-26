import { Component, Input } from '@angular/core';
import { ContentService } from '@app-core/services/content/content.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent {

  constructor(
    public contentService: ContentService,
  ) { }

  /** Position in the array for the image to show */
  @Input() imagePosition: number | null = null;

}
