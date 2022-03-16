import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillGapsTrainingPageComponent } from './fill-gaps-training-page.component';

describe('FillGapsTrainingPageComponent', () => {
  let component: FillGapsTrainingPageComponent;
  let fixture: ComponentFixture<FillGapsTrainingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillGapsTrainingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillGapsTrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
