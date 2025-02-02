import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHomeDashboardComponent } from './table-home-dashboard.component';

describe('TableHomeDashboardComponent', () => {
  let component: TableHomeDashboardComponent;
  let fixture: ComponentFixture<TableHomeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHomeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHomeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
