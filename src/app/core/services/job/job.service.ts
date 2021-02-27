import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { AppJobDetails } from '@app-core/models/job-details.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ContentService } from '../content/content.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {

  private collectionName = 'experience';
  private jobDetailsSubject = new BehaviorSubject<AppJobDetails[]>([]);
  private collectionRef;
  // Property allows to re-call a query and get more jobs
  private size = new BehaviorSubject(4);
  private jobsObservable: Observable<AppJobDetails[]>;
  private lastVisible: QueryDocumentSnapshot<AppJobDetails> | null | undefined;
  private projectCount: number | null = null;

  constructor(
    private afs: AngularFirestore,
    private contentService: ContentService,
  ) {
    this.collectionRef = this.afs.collection<AppJobDetails>(this.collectionName);
    this.contentService.getContent().subscribe(content => this.projectCount = content ? content.projectCount : null);

    // Special observable to allow query and get more jobs
    this.jobsObservable = this.size.pipe(
      switchMap(
        // If lastVisible is null it means it reach the end. Therefore an empty array is return
        size => this.lastVisible === null
          ? []
          : this.afs.collection<AppJobDetails>(this.collectionName, ref =>
            // If lastVisible it's undefined it means it's the first time it triggers the function
            this.lastVisible !== undefined
              ? ref.orderBy('createdAt', 'desc').limit(size).startAfter(this.lastVisible)
              : ref.orderBy('createdAt', 'desc').limit(size),
          )
            .get()
            .toPromise()
            .then(
              action => {
                const isLast = this.projectCount === this.jobDetailsSubject.value.length + 1;
                // Save lastVisible for pagination
                this.lastVisible = isLast ? null : action.docs[action.docs.length - 1];
                return action.docs.map(a => ({ id: a.id, ...a.data() as AppJobDetails }));
              },
            ),
      ),
    );
    this.jobsObservable.subscribe(jobs => this.jobDetailsSubject.next([...this.jobDetailsSubject.value, ...jobs]));
  }

  /**
   * Returns an array listing all the jobs details.
   */
  public getJobs(): Observable<AppJobDetails[]> {
    return this.jobDetailsSubject;
  }

  /**
   * Calls firestore for more data.
   *
   * @param loadSize Size for the next load.
   */
  public loadMoreJobs(loadSize: number): void {
    this.size.next(loadSize);
  }

  /**
   * Returns an individual document from the db.
   *
   * @param jobId Document id to get.
   */
  public getJob(jobId: string): Observable<AppJobDetails | null> {
    return this.collectionRef
      .doc(jobId)
      .snapshotChanges()
      .pipe(
        map(data => data ? ({ id: data.payload.id, ...data.payload.data() as AppJobDetails }) : null),
      );
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
