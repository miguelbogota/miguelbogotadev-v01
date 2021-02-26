import { Component, Input } from '@angular/core';
import { ContentService } from '@app-core/services/content/content.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent {

  constructor(
    public contentService: ContentService,
  ) { }

  @Input() public text = '';

}
