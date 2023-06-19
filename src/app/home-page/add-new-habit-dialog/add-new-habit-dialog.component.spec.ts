import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHabitDialogComponent } from './add-new-habit-dialog.component';

describe('AddNewHabitDialogComponent', () => {
  let component: AddNewHabitDialogComponent;
  let fixture: ComponentFixture<AddNewHabitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewHabitDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewHabitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
