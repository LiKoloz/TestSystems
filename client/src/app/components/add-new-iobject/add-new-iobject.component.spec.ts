import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewIObjectComponent } from './add-new-iobject.component';

describe('AddNewIObjectComponent', () => {
  let component: AddNewIObjectComponent;
  let fixture: ComponentFixture<AddNewIObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewIObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewIObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
