import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSearchPageComponent } from './books-search-page.component';

describe('BooksSearchPageComponent', () => {
  let component: BooksSearchPageComponent;
  let fixture: ComponentFixture<BooksSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksSearchPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
