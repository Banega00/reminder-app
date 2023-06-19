import { Component, Input } from '@angular/core';
import { HabitModel } from '../models/habit.model';
import { MatDialogRef } from '@angular/material/dialog';
import { AddNewHabitDialogComponent } from '../home-page/add-new-habit-dialog/add-new-habit-dialog.component';

@Component({
  selector: 'app-mark-habit-dialog',
  templateUrl: './mark-habit-dialog.component.html',
  styleUrls: ['./mark-habit-dialog.component.css']
})
export class MarkHabitDialogComponent {

  @Input() habit: HabitModel;

  constructor(private dialogRef: MatDialogRef<MarkHabitDialogComponent>) {
  }

  closeDialog() {
    this.dialogRef.close({ save: false });
  }

  saveHabitHistory() {
    // this.dialogRef.close({ save: true, newHabit: this.newHabit })
  }
}
