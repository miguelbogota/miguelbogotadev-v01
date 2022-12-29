import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppJobDetails } from '@app-core/models/job-details.model';
import { JobService } from '@app-core/services/job/job.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('experienceAnimation', [
      transition(
        ':enter', [
          style({ opacity: 0, transform: 'translateY(2px)' }),
          animate('300ms 200ms linear', style({ opacity: 1, transform: 'translateY(0px)' })),
        ],
      ),
      transition(
        ':leave', [
          style({ opacity: 1, transform: 'translateY(0px)' }),
          animate('300ms linear', style({ opacity: 0, transform: 'translateY(2px)' })),
        ],
      ),
    ]),
  ],
})
export class ProjectsComponent implements OnInit, OnDestroy {

  constructor(
    public jobService: JobService,
  ) { }

  private jobsSubscription: Subscription | null = null;

  public jobs: AppJobDetails[] = [];

  public ngOnInit(): void {
    this.jobsSubscription = this.jobService.getJobs().subscribe(jobs => this.jobs = jobs);
  }

  public ngOnDestroy(): void {
    this.jobsSubscription?.unsubscribe();
  }

}
