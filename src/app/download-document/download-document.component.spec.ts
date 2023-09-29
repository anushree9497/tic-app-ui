import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadDocumentComponent } from './download-document.component';

describe('DownloadDocumentComponent', () => {
  let component: DownloadDocumentComponent;
  let fixture: ComponentFixture<DownloadDocumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadDocumentComponent]
    });
    fixture = TestBed.createComponent(DownloadDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
