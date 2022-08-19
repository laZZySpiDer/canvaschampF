import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallDisplayComponent } from './wall-display.component';

describe('WallDisplayComponent', () => {
  let component: WallDisplayComponent;
  let fixture: ComponentFixture<WallDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
