import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppJobDetails } from '@app-core/models/job-details.model';
import { JobService } from '@app-core/services/job/job.service';
import { NavigationService } from '@app-core/services/navigation/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit, OnDestroy {

  constructor(
    private activetedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private navigation: NavigationService,
    public jobService: JobService,
  ) { }

  private activatedRouteSubscription: Subscription | null = null;

  public project: AppJobDetails | null = null;
  public isLoading = true;

  public ngOnInit(): void {
    this.activatedRouteSubscription = this.activetedRoute.paramMap.subscribe(params => {
      const projectId = params.get('projectId');
      if (projectId) {
        this.jobService.getJob(projectId).then(project => {
          this.project = project;
          this.isLoading = false;
        });
      }
    });
  }

  public ngOnDestroy(): void {
    this.activatedRouteSubscription?.unsubscribe();
  }

  /**
   * Depending of the user initial way to get to the page
   * it could send back or to the '/works' page.
   */
  public closeDialog(): void {
    if (this.navigation.isPreviousPageInDomain) { this.location.back(); }
    else { this.router.navigate(['/works']); }
  }

}
