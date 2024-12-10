import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNormalComponent } from './dashboard-normal.component';

describe('DashboardNormalComponent', () => {
  let component: DashboardNormalComponent;
  let fixture: ComponentFixture<DashboardNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardNormalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
