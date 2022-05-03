import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppStorage } from '@app-core/classes/storage/storage.class';
import { AppContent } from '@app-core/models/content.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '@app-env';

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  private storage = new AppStorage<AppContent>({ key: 'a1YALo9AEmKZX21lBDiS', type: 'local' });
  private contentSubject = new BehaviorSubject<AppContent | null>(this.storage.value);

  constructor(
    private http: HttpClient,
  ) {
    this.http.get<AppContent>(`${environment.apiUrl}/api/content/1`).toPromise().then(
      content => this.storage.set(content ?? null),
    );

    // Get values from local storage
    this.storage.valueChanges.subscribe(content => this.contentSubject.next(content));
  }

  /**
   * Returns an observable with the content to render.
   */
  public getContent(): Observable<AppContent | null> {
    return this.contentSubject;
  }

}
