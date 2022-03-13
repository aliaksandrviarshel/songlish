import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongExpandedTileComponent } from './song-expanded-tile.component';

describe('SongExpandedTileComponent', () => {
  let component: SongExpandedTileComponent;
  let fixture: ComponentFixture<SongExpandedTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongExpandedTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongExpandedTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
