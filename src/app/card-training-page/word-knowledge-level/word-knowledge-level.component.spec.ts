import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordKnowledgeLevelComponent } from './word-knowledge-level.component';

describe('WordKnowledgeLevelComponent', () => {
  let component: WordKnowledgeLevelComponent;
  let fixture: ComponentFixture<WordKnowledgeLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordKnowledgeLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordKnowledgeLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
