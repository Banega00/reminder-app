import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewHabitDialogComponent } from './add-new-habit-dialog/add-new-habit-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  public habits = [
    {
      id: 1,
      text: 'This is my first habit'
    },
    {
      id: 2,
      text: 'This is my second habit'
    },
    {
      id: 3,
      text: 'This is my third habit'
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
      const newHabit = result;

      //ADD NEW HABIT
    });
  }
}
