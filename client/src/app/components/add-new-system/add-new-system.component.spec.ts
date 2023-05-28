import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSystemComponent } from './add-new-system.component';

describe('AddNewSystemComponent', () => {
  let component: AddNewSystemComponent;
  let fixture: ComponentFixture<AddNewSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
