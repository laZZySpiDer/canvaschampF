import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitPhotoComponent } from './split-photo.component';

describe('SplitPhotoComponent', () => {
  let component: SplitPhotoComponent;
  let fixture: ComponentFixture<SplitPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
