import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingModeTileComponent } from './training-mode-tile.component';

describe('TrainingModeTileComponent', () => {
  let component: TrainingModeTileComponent;
  let fixture: ComponentFixture<TrainingModeTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingModeTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingModeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
