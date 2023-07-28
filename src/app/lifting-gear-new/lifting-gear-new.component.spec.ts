import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingGearNewComponent } from './lifting-gear-new.component';

describe('LiftingGearNewComponent', () => {
  let component: LiftingGearNewComponent;
  let fixture: ComponentFixture<LiftingGearNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiftingGearNewComponent]
    });
    fixture = TestBed.createComponent(LiftingGearNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
