import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsHomeDashboardComponent } from './statistics-home-dashboard.component';

describe('StatisticsHomeDashboardComponent', () => {
  let component: StatisticsHomeDashboardComponent;
  let fixture: ComponentFixture<StatisticsHomeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsHomeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsHomeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
