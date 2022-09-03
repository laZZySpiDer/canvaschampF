import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPrintsComponent } from './canvas-prints.component';

describe('CanvasPrintsComponent', () => {
  let component: CanvasPrintsComponent;
  let fixture: ComponentFixture<CanvasPrintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasPrintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasPrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
