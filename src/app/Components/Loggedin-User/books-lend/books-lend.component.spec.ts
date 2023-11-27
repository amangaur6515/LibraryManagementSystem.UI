import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksLendComponent } from './books-lend.component';

describe('BooksLendComponent', () => {
  let component: BooksLendComponent;
  let fixture: ComponentFixture<BooksLendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksLendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksLendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
