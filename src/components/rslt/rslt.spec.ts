import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rslt } from './rslt';

describe('Rslt', () => {
  let component: Rslt;
  let fixture: ComponentFixture<Rslt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rslt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rslt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
