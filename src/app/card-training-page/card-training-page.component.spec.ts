import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrainingPageComponent } from './card-training-page.component';

describe('CardTrainingPageComponent', () => {
  let component: CardTrainingPageComponent;
  let fixture: ComponentFixture<CardTrainingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTrainingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
