import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppJobDetails } from '@app-core/models/job-details.model';
import { JobService } from '@app-core/services/job/job.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {

  constructor(
    public jobService: JobService,
  ) { }

  @Input() public initialSize = 7;

  private jobsSubscription: Subscription | null = null;

  public jobs: AppJobDetails[] = [];

  public ngOnInit(): void {
    this.jobsSubscription = this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
  }

  public ngOnDestroy(): void {
    this.jobsSubscription?.unsubscribe();
  }

}
