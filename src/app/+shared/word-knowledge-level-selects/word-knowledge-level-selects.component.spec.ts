import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordKnowledgeLevelSelectsComponent } from './word-knowledge-level-selects.component';

describe('WordKnowledgeLevelSelectsComponent', () => {
  let component: WordKnowledgeLevelSelectsComponent;
  let fixture: ComponentFixture<WordKnowledgeLevelSelectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordKnowledgeLevelSelectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordKnowledgeLevelSelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
