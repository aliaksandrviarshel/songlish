import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordAddingPageComponent } from './word-adding-page.component';

describe('WordAddingPageComponent', () => {
  let component: WordAddingPageComponent;
  let fixture: ComponentFixture<WordAddingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordAddingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordAddingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
