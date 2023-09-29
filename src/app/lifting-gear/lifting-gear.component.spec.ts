import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingGearComponent } from './lifting-gear.component';

describe('LiftingGearComponent', () => {
  let component: LiftingGearComponent;
  let fixture: ComponentFixture<LiftingGearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiftingGearComponent]
    });
    fixture = TestBed.createComponent(LiftingGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
