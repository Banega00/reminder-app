import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewHabitDialogComponent } from './add-new-habit-dialog/add-new-habit-dialog.component';
import { HabitModel } from '../models/habit.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  public habits: HabitModel[] = [
    {
      id: 1,
      title: 'This is my first habit',
      description: '',
      measurementType: 'NUMERIC',
      goal: 10,
      unit: 'minutes',
      habitColor: 'green',
      history: [],
      dateCreated: new Date()
    }
  ]

  constructor(public addNewHabitDialog: MatDialog) {
    
  }

  openAddNewHabitDialog(): void {
    const dialogRef = this.addNewHabitDialog.open(AddNewHabitDialogComponent, {
      // data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      if(!result?.save) return;

      const newHabit = result.newHabit;

      this.habits.push(newHabit);

      //ADD NEW HABIT

    });
  }
}
