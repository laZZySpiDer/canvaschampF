import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadChoiceComponent } from './upload-choice.component';

describe('UploadChoiceComponent', () => {
  let component: UploadChoiceComponent;
  let fixture: ComponentFixture<UploadChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
