import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAddedByUserComponent } from './books-added-by-user.component';

describe('BooksAddedByUserComponent', () => {
  let component: BooksAddedByUserComponent;
  let fixture: ComponentFixture<BooksAddedByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksAddedByUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksAddedByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
