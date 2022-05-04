import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppJobDetails } from '@app-core/models/job-details.model';
import { environment } from '@app-env';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  private jobDetailsSubject = new BehaviorSubject<AppJobDetails[]>([]);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.http.get<{ length: number; work: AppJobDetails[] }>(`${environment.apiUrl}/api/work`)
      .toPromise()
      .then(({ work }) => {
        this.jobDetailsSubject.next(
          work.map(_work => ({
            ..._work,
            imageUrls: _work.imageUrls.map(img => img.includes('https://') ? img : environment.apiUrl + img),
          })),
        );
      });
  }

  /**
   * Returns an array listing all the jobs details.
   */
  public getJobs(): Observable<AppJobDetails[]> {
    return this.jobDetailsSubject;
  }

  /**
   * Returns an individual document from the db.
   *
   * @param jobId Document id to get.
   */
  public async getJob(jobId: string): Promise<AppJobDetails | null> {
    const projectInState = this.jobDetailsSubject.value.find(_project => _project.id === jobId);
    if (projectInState) { return projectInState; }

    const project = await this.http.get<AppJobDetails>(`${environment.apiUrl}/api/work/${jobId}`)
      .toPromise()
      .catch(() => {
        this.router.navigate(['/works']);
      });
    if (!!project) {
      return {
        ...project,
        imageUrls: project.imageUrls.map(img => img.includes('https://') ? img : environment.apiUrl + img),
      };
    }

    return null;
  }
}
