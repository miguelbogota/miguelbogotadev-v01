import { TestBed } from '@angular/core/testing';
import { AppStorage } from './storage.class';

describe('StorageService', () => {
  let service: AppStorage<string>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
