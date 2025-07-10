import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYouNeedToKnow } from './what-you-need-to-know';

describe('WhatYouNeedToKnow', () => {
  let component: WhatYouNeedToKnow;
  let fixture: ComponentFixture<WhatYouNeedToKnow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatYouNeedToKnow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatYouNeedToKnow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
