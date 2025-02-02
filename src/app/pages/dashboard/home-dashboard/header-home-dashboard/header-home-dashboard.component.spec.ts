import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHomeDashboardComponent } from './header-home-dashboard.component';

describe('HeaderHomeDashboardComponent', () => {
  let component: HeaderHomeDashboardComponent;
  let fixture: ComponentFixture<HeaderHomeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderHomeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHomeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
