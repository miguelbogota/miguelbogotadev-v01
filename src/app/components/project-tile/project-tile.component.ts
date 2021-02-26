import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppJobDetails } from '@app-core/models/job-details.model';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss'],
})
export class ProjectTileComponent {

  constructor(
    public router: Router,
  ) { }

  @Input() public project: AppJobDetails | null = null;

  @HostListener('click')
  public onClick() {
    this.router.navigate([`/works/${this.project?.id}`]);
  }

}
