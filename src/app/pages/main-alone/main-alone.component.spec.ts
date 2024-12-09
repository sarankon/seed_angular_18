import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAloneComponent } from './main-alone.component';

describe('MainAloneComponent', () => {
  let component: MainAloneComponent;
  let fixture: ComponentFixture<MainAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
