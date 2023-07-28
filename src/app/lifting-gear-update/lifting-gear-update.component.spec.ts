import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingGearUpdateComponent } from './lifting-gear-update.component';

describe('LiftingGearUpdateComponent', () => {
  let component: LiftingGearUpdateComponent;
  let fixture: ComponentFixture<LiftingGearUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiftingGearUpdateComponent]
    });
    fixture = TestBed.createComponent(LiftingGearUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
