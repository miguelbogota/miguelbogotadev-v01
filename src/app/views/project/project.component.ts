import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppJobDetails } from '@app-core/models/job-details.model';
import { JobService } from '@app-core/services/job/job.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit, OnDestroy {

  constructor(
    private activetedRoute: ActivatedRoute,
    public jobService: JobService,
  ) { }

  private activatedRouteSubscription: Subscription | null = null;

  public project: AppJobDetails | null = null;

  public ngOnInit(): void {
    this.activatedRouteSubscription = this.activetedRoute.paramMap.subscribe(params => {
      const projectId = params.get('projectId');
      if (projectId) { this.jobService.getJob(projectId).then(project => this.project = project); }
    });
  }

  public ngOnDestroy(): void {
    this.activatedRouteSubscription?.unsubscribe();
  }

}
