import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongLinesSwiperComponent } from './song-lines-swiper.component';

describe('SongLinesSwiperComponent', () => {
  let component: SongLinesSwiperComponent;
  let fixture: ComponentFixture<SongLinesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongLinesSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongLinesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
