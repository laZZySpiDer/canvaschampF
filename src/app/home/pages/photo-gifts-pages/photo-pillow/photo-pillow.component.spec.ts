import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPillowComponent } from './photo-pillow.component';

describe('PhotoPillowComponent', () => {
  let component: PhotoPillowComponent;
  let fixture: ComponentFixture<PhotoPillowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoPillowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPillowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
