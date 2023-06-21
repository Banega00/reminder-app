import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitModel } from '../models/habit.model';
import { MatCalendarCellCssClasses, MatCalendarView } from '@angular/material/datepicker';
import * as moment from 'moment';
import { HabitHistoryStatus } from '../models/habit-history.model';

@Component({
  selector: 'app-habit-page',
  templateUrl: './habit-page.component.html',
  styleUrls: ['./habit-page.component.css']
})
export class HabitPageComponent{
  public habit:HabitModel;
  private listeners: (() => void)[] = [];

  public today = new Date();

  public selectedDate: Date | null;
  public selectedHistoryItem: HabitModel['history'][0];
  public selectedHistoryItemIndex: number;

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {
    console.log(history.state.habit)
    this.habit = history.state.habit;

    this.selectedHistoryItemIndex = 0
    this.selectedDate = new Date();
    this.selectedHistoryItem = this.habit.history[this.selectedHistoryItemIndex];
  }


  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      for (let historyItem of this.habit.history) {
        if (moment(historyItem.date).isSame(date, 'day')) {

          if (this.habit.measurementType == 'NUMERIC') {
            if (historyItem.value > this.habit.goal!) {
              return `green`;
            } else {
              return `red`;
            }
          } else if (this.habit.measurementType == 'YES_NO') {
            if (historyItem.value == 1) {
              return `green`;
            } else {
              return `red`;
            }
          }
        }
      }
      
      return '';
    }
  }

  formatDate(date: Date, format?: string){
    return moment(date).format(format ?? 'MMMM Do YYYY');
  }

}
