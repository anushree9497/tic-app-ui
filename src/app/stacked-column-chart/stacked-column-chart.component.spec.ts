import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedColumnChartComponent } from './stacked-column-chart.component';

describe('StackedColumnChartComponent', () => {
  let component: StackedColumnChartComponent;
  let fixture: ComponentFixture<StackedColumnChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StackedColumnChartComponent]
    });
    fixture = TestBed.createComponent(StackedColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
