import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChsBtn } from './chs-btn';

describe('ChsBtn', () => {
  let component: ChsBtn;
  let fixture: ComponentFixture<ChsBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChsBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChsBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
