import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoMugComponent } from './photo-mug.component';

describe('PhotoMugComponent', () => {
  let component: PhotoMugComponent;
  let fixture: ComponentFixture<PhotoMugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoMugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoMugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
