import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanaromaPhotoComponent } from './panaroma-photo.component';

describe('PanaromaPhotoComponent', () => {
  let component: PanaromaPhotoComponent;
  let fixture: ComponentFixture<PanaromaPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanaromaPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanaromaPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
