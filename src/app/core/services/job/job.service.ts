import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AppJobDetails } from '@app-core/models/job-details.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  private collectionName = 'experience';
  private jobDetailsSubject = new BehaviorSubject<AppJobDetails[] | null>(null);
  private collectionRef;

  constructor(
    private afs: AngularFirestore,
  ) {
    this.collectionRef = this.afs.collection<AppJobDetails>(this.collectionName);
    this.collectionRef
      .snapshotChanges()
      .pipe(
        map(action => action.map(a => ({ id: a.payload.doc.id, ...a.payload.doc.data() as AppJobDetails }))),
      )
      .subscribe(jobs => this.jobDetailsSubject.next(jobs ? jobs : null));
  }

  /**
   * Returns an array listing all the jobs details.
   */
  public getJobs(): Observable<AppJobDetails[] | null> {
    return this.jobDetailsSubject;
  }

  /**
   * Updates an individual document in the db by passing the new job.
   *
   * @param jobId Document id to edit.
   * @param newJob New job to change to.
   */
  public setJob(jobId: string, newJob: AppJobDetails): void {
    delete newJob.id;
    this.collectionRef.doc(jobId).set(newJob, { merge: true });
  }

  /**
   * Add an individual document in the db by passing the new job.
   *
   * @param newJob New job to add.
   */
  public addJob(newJob: AppJobDetails): Promise<DocumentReference<AppJobDetails>> {
    return this.collectionRef.add(newJob);
  }

  /**
   * Deletes an individual document in the db by passing the job id.
   *
   * @param jobId Document id to delete.
   */
  public async deleteJob(jobId: string): Promise<void> {
    return this.collectionRef.doc(jobId).delete();
  }

}
