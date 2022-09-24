import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalPrintsComponent } from './metal-prints.component';

describe('MetalPrintsComponent', () => {
  let component: MetalPrintsComponent;
  let fixture: ComponentFixture<MetalPrintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalPrintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalPrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
