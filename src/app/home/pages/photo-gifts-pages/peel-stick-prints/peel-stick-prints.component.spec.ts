import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeelStickPrintsComponent } from './peel-stick-prints.component';

describe('PeelStickPrintsComponent', () => {
  let component: PeelStickPrintsComponent;
  let fixture: ComponentFixture<PeelStickPrintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeelStickPrintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeelStickPrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
