import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordListTileComponent } from './word-list-tile.component';

describe('WordListTileComponent', () => {
  let component: WordListTileComponent;
  let fixture: ComponentFixture<WordListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordListTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
