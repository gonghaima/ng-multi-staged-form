import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDetails } from './your-details';

describe('YourDetails', () => {
  let component: YourDetails;
  let fixture: ComponentFixture<YourDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
