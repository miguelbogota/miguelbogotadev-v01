import { Component, Input } from '@angular/core';
import { AppJobDetails } from '@app-core/models/job-details.model';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss'],
})
export class ProjectTileComponent {

  constructor() { }

  @Input() public project: AppJobDetails | null = null;

}
