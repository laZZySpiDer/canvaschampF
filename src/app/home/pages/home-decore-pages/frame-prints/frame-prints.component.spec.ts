import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramePrintsComponent } from './frame-prints.component';

describe('FramePrintsComponent', () => {
  let component: FramePrintsComponent;
  let fixture: ComponentFixture<FramePrintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramePrintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FramePrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
