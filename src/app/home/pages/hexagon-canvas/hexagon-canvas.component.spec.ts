import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonCanvasComponent } from './hexagon-canvas.component';

describe('HexagonCanvasComponent', () => {
  let component: HexagonCanvasComponent;
  let fixture: ComponentFixture<HexagonCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexagonCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
