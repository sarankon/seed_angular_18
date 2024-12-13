import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakerComponent } from './faker.component';

describe('FakerComponent', () => {
  let component: FakerComponent;
  let fixture: ComponentFixture<FakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
