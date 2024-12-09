import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLoanPageComponent } from './register-loan-page.component';

describe('RegisterLoanPageComponent', () => {
  let component: RegisterLoanPageComponent;
  let fixture: ComponentFixture<RegisterLoanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterLoanPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterLoanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
