import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangingCanvasComponent } from './hanging-canvas.component';

describe('HangingCanvasComponent', () => {
  let component: HangingCanvasComponent;
  let fixture: ComponentFixture<HangingCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangingCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangingCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
