import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrBtn } from './clr-btn';

describe('ClrBtn', () => {
  let component: ClrBtn;
  let fixture: ComponentFixture<ClrBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClrBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClrBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
