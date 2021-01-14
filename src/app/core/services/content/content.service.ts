import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppContent } from '@app-core/models/content.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  private collectionName = 'content';
  private documentId = 'jBDR2G0ttYPIwc7wRGPU';
  private contentSubject = new BehaviorSubject<AppContent | null>(null);
  private documentRef;

  constructor(
    private afs: AngularFirestore,
  ) {
    this.documentRef = this.afs.collection(this.collectionName).doc<AppContent>(this.documentId);
    this.documentRef
      .valueChanges()
      .subscribe(content => this.contentSubject.next(content ? content : null));
  }

  /**
   * Returns an observable with the content to render.
   */
  public getContent(): Observable<AppContent | null> {
    return this.contentSubject;
  }

  /**
   * Updates in the db by passing the new object content.
   *
   * @param newContent New content to change to.
   */
  public setContent(newContent: AppContent): void {
    this.documentRef.set(newContent, { merge: true });
  }

}
