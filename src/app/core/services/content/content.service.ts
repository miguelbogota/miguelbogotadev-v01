import { Injectable } from '@angular/core';
import { AppContent } from '@app-core/models/content.model';
import { Observable, of } from 'rxjs';
import contentJson from 'src/assets/content.json';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() { }

  /**
   * Returns an observable with the content to render.
   */
  public getContent(): Observable<AppContent> {
    return of(contentJson);
  }
}
