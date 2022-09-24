import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodPrintsComponent } from './wood-prints.component';

describe('WoodPrintsComponent', () => {
  let component: WoodPrintsComponent;
  let fixture: ComponentFixture<WoodPrintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodPrintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodPrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
