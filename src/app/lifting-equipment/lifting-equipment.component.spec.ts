import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftingEquipmentComponent } from './lifting-equipment.component';

describe('LiftingEquipmentComponent', () => {
  let component: LiftingEquipmentComponent;
  let fixture: ComponentFixture<LiftingEquipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiftingEquipmentComponent]
    });
    fixture = TestBed.createComponent(LiftingEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
