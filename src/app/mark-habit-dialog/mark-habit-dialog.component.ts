import { Component, Inject, Input } from '@angular/core';
import { HabitModel } from '../models/habit.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddNewHabitDialogComponent } from '../home-page/add-new-habit-dialog/add-new-habit-dialog.component';

@Component({
  selector: 'app-mark-habit-dialog',
  templateUrl: './mark-habit-dialog.component.html',
  styleUrls: ['./mark-habit-dialog.component.css']
})
export class MarkHabitDialogComponent {
  public habit: HabitModel;
  public historyItem: HabitModel['history'][0];

  constructor(
    private dialogRef: MatDialogRef<MarkHabitDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {habit: HabitModel, historyItem: HabitModel['history'][0]}) {
      this.habit = data.habit;
      this.historyItem = data.historyItem;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  changeYesNoValue(value: 0 | 1){
    this.historyItem.value = value;
  }
}
