import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillGapsPageComponent } from './fill-gaps-page.component';

describe('FillGapsPageComponent', () => {
  let component: FillGapsPageComponent;
  let fixture: ComponentFixture<FillGapsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillGapsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillGapsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
