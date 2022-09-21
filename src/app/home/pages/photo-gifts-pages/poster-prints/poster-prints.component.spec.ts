import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterPrintsComponent } from './poster-prints.component';

describe('PosterPrintsComponent', () => {
  let component: PosterPrintsComponent;
  let fixture: ComponentFixture<PosterPrintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterPrintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterPrintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
