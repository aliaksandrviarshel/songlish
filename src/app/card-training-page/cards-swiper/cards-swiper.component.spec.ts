import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSwiperComponent } from './cards-swiper.component';

describe('CardsSwiperComponent', () => {
  let component: CardsSwiperComponent;
  let fixture: ComponentFixture<CardsSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSwiperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
