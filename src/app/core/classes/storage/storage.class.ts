import { Observable, BehaviorSubject } from 'rxjs';

/**
 * Interface for the configuration of the Storage class
 */
export interface AppStorageConfig {
  key: string;
  type: 'local' | 'session';
}

/**
 * This class will allow to set up the local and session storage as an
 * observable to listen for changes
 */
export class AppStorage<T> {

  private logger: BehaviorSubject<T | null> = new BehaviorSubject<T | null>(this.value);

  /**
   * In order to use this class the initial setup needs to be provide
   * as an argument for the initial state.
   *
   * @param config Initial configuration to be searched in the storage.
   */
  constructor(
    private config: AppStorageConfig = { key: 'default', type: 'local' },
  ) { }

  /**
   * Function will store the data passed in the local or session storage
   *
   * @param data Data to be store
   */
  public set(data: T | null): void {
    if (this.config.type === 'local') { localStorage.setItem(this.config.key, JSON.stringify(data)); }
    else if (this.config.type === 'session') { sessionStorage.setItem(this.config.key, JSON.stringify(data)); }
    else { throw new Error('Error with type of storage, can only be of type "session" or "local" storage.'); }
    this.logger.next(data);
  }

  /**
   * Return the data stored in the local or session storage
   */
  public get value(): T | null {
    if (this.config.type === 'local') {
      const theresData = localStorage.getItem(this.config.key) !== null;
      return theresData ? JSON.parse(localStorage.getItem(this.config.key) || '') as T : null;
    }
    else if (this.config.type === 'session') {
      const theresData = sessionStorage.getItem(this.config.key) !== null;
      return theresData ? JSON.parse(sessionStorage.getItem(this.config.key) || '') as T : null;
    }
    else { throw new Error('Error with type of storage, can only be of type "session" or "local" storage.'); }
  }

  /**
   * Deletes the data stored in the local or session storage
   */
  public delete(): void {
    if (this.config.type === 'local') { localStorage.removeItem(this.config.key); }
    else if (this.config.type === 'session') { sessionStorage.removeItem(this.config.key); }
    else { throw new Error('Error with type of storage, can only be of type "session" or "local" storage.'); }
    this.logger.next(null);
  }

  /**
   * Returns an observable with the data stored in the local or session storage
   */
  public get valueChanges(): Observable<T | null> {
    return this.logger;
  }

}
