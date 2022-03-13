import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordExpandedTileComponent } from './word-expanded-tile.component';

describe('WordExpandedTileComponent', () => {
  let component: WordExpandedTileComponent;
  let fixture: ComponentFixture<WordExpandedTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordExpandedTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordExpandedTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
