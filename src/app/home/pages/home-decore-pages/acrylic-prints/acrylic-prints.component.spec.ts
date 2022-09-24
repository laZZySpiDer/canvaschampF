import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrylicPrintsComponent } from './acrylic-prints.component';

describe('AcrylicPrintsComponent', () => {
  let component: AcrylicPrintsComponent;
  let fixture: ComponentFixture<AcrylicPrintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrylicPrintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrylicPrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
