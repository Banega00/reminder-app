import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitModel } from '../models/habit.model';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-habit-page',
  templateUrl: './habit-page.component.html',
  styleUrls: ['./habit-page.component.css']
})
export class HabitPageComponent {
  public habit:HabitModel;
  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    const data = history.state.habit;
    this.habit = new HabitModel(data);
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      // if(moment(date).day())
      if(moment(date).day()==1){
        return 'green';
      }
      return '';
    }
  }
}
