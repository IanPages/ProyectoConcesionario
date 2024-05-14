import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulPaymentComponentComponent } from './successful-payment-component.component';

describe('SuccessfulPaymentComponentComponent', () => {
  let component: SuccessfulPaymentComponentComponent;
  let fixture: ComponentFixture<SuccessfulPaymentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessfulPaymentComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessfulPaymentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
