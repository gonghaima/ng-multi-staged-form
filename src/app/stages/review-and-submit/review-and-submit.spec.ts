import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAndSubmit } from './review-and-submit';

describe('ReviewAndSubmit', () => {
  let component: ReviewAndSubmit;
  let fixture: ComponentFixture<ReviewAndSubmit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewAndSubmit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewAndSubmit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
