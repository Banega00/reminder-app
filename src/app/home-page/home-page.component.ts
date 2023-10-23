import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewHabitDialogComponent } from './add-new-habit-dialog/add-new-habit-dialog.component';
import { HabitModel } from '../models/habit.model';
import * as moment from 'moment';
import { HabitHistoryStatus } from '../models/habit-history.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  public dates: moment.Moment[];
  public habits: HabitModel[] = [
    {
      id: 1,
      title: 'This is my first habit',
      description: '',
      measurementType: 'NUMERIC',
      goal: 10,
      unit: 'minutes',
      habitColor: 'green',
      history: [
        {date: new Date('2023-05-15'), value: 11, percentageOfGoal: 50, status: HabitHistoryStatus.SUCCESSFUL},
        {date: new Date('2023-06-15'), value: 11, percentageOfGoal: 50, status: HabitHistoryStatus.SUCCESSFUL},
        {date: new Date('2023-06-16'), value: 20, percentageOfGoal: 50, status: HabitHistoryStatus.SUCCESSFUL},
        {date: new Date('2023-06-17'), value: 9, percentageOfGoal: 50, status: HabitHistoryStatus.SUCCESSFUL},
        {date: new Date('2023-06-18'), value: 14, percentageOfGoal: 50, status: HabitHistoryStatus.SUCCESSFUL},
      ],
      dateCreated: new Date()
    }
  ]


  constructor(public addNewHabitDialog: MatDialog) {
    this.dates = [0,1,2,3,4].map(number =>{
      return moment().subtract(number, 'days');
    })
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
