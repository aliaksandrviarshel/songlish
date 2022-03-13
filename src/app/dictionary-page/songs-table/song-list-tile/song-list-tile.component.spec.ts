import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListTileComponent } from './song-list-tile.component';

describe('SongListTileComponent', () => {
  let component: SongListTileComponent;
  let fixture: ComponentFixture<SongListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongListTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
