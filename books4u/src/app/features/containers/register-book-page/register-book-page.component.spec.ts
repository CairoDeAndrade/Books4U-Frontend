import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBookPageComponent } from './register-book-page.component';

describe('RegisterBookPageComponent', () => {
  let component: RegisterBookPageComponent;
  let fixture: ComponentFixture<RegisterBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterBookPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
