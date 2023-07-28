import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingGearSearchComponent } from './lifting-gear-search.component';

describe('LiftingGearSearchComponent', () => {
  let component: LiftingGearSearchComponent;
  let fixture: ComponentFixture<LiftingGearSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiftingGearSearchComponent]
    });
    fixture = TestBed.createComponent(LiftingGearSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
