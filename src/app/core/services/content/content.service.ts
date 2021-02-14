import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppContent } from '@app-core/models/content.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppStorage } from '@app-core/classes/storage/storage.class';

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  private collectionName = 'content';
  private documentId = 'jBDR2G0ttYPIwc7wRGPU';
  private storage = new AppStorage<AppContent>({ key: 'a1YALo9AEmKZX21lBDiS', type: 'local' });
  private contentSubject = new BehaviorSubject<AppContent | null>(this.storage.value);
  private documentRef;

  constructor(
    private afs: AngularFirestore,
  ) {
    this.documentRef = this.afs.collection(this.collectionName).doc<AppContent>(this.documentId);
    // Get values from Firestore if local store it's null or empty
    if (this.storage.value === null) {
      this.documentRef.get().toPromise().then(
        content => this.storage.set(content.data() !== undefined ? content.data() as AppContent : null),
      );
    }
    // Get values from local storage
    this.storage.valueChanges.subscribe(content => this.contentSubject.next(content));
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
