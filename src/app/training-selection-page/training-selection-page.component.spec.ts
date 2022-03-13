import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSelectionPageComponent } from './training-selection-page.component';

describe('TrainingSelectionPageComponent', () => {
  let component: TrainingSelectionPageComponent;
  let fixture: ComponentFixture<TrainingSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSelectionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
