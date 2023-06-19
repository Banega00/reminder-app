import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkHabitDialogComponent } from './mark-habit-dialog.component';

describe('MarkHabitDialogComponent', () => {
  let component: MarkHabitDialogComponent;
  let fixture: ComponentFixture<MarkHabitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkHabitDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkHabitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
