import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedPageNoticeComponent } from './archived-page-notice.component';

describe('ArchivedPageNoticeComponent', () => {
  let component: ArchivedPageNoticeComponent;
  let fixture: ComponentFixture<ArchivedPageNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivedPageNoticeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedPageNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
