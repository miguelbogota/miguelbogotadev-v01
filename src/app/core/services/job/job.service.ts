import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AppStorage } from '@app-core/classes/storage/storage.class';
import { AppJobDetails } from '@app-core/models/job-details.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  private collectionName = 'experience';
  private jobDetailsSubject = new BehaviorSubject<AppJobDetails[]>([]);
  private storage = new AppStorage<AppJobDetails[]>({ key: 'iZOPXlczPEyntiQaCgrs', type: 'local' });
  private collectionRef;

  constructor(
    private afs: AngularFirestore,
  ) {
    this.collectionRef = this.afs.collection<AppJobDetails>(this.collectionName);
    this.collectionRef
      .get()
      .toPromise()
      .then(action => {
        this.storage.set(action.docs.map(a => ({
          id: a.id,
          ...a.data(),
        }) as AppJobDetails));
      });
    // Get values from local storage
    this.storage.valueChanges.subscribe(jobs => this.jobDetailsSubject.next(jobs ?? []));
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
    const projectInState = this.jobDetailsSubject.value.find(project => project.id === jobId);
    if (projectInState) { return projectInState; }

    const data = await this.collectionRef.doc(jobId).get().toPromise();
    return data ? ({ id: data.id, ...(data.data() as AppJobDetails) }) : null;
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
