import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTranslateTrainingPageComponent } from './word-translate-training-page.component';

describe('WordTranslateTrainingPageComponent', () => {
  let component: WordTranslateTrainingPageComponent;
  let fixture: ComponentFixture<WordTranslateTrainingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordTranslateTrainingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordTranslateTrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
