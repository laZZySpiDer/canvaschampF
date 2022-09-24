import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCoasterComponent } from './photo-coaster.component';

describe('PhotoCoasterComponent', () => {
  let component: PhotoCoasterComponent;
  let fixture: ComponentFixture<PhotoCoasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCoasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
