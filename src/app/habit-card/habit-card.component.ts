import { Component, Input, OnInit } from '@angular/core';
import { HabitModel } from '../models/habit.model';
import * as moment from 'moment';
import { HabitHistoryStatus } from '../models/habit-history.model';

@Component({
  selector: 'app-habit-card',
  templateUrl: './habit-card.component.html',
  styleUrls: ['./habit-card.component.css']
})
export class HabitCardComponent implements OnInit{

  @Input() habit: HabitModel;

  public visibleHistory: HabitModel['history'];

  constructor() { 
  }

  ngOnInit(): void {
    this.fillVisibleHistory(this.habit);
  }

  public fillVisibleHistory(habit: HabitModel) {
    this.visibleHistory = this.habit?.history.slice(-5);
    console.log(this.visibleHistory)

    if(this.visibleHistory.length < 5) {
      const numberOfMissingDays = 5 - habit?.history.length;
      
      for(let i = 1; i <= numberOfMissingDays; i++) {
        this.visibleHistory.push({
          value: 0,
          date: moment().subtract(i, 'days').toDate(),
          status: HabitHistoryStatus.UNSUCCESSFUL,
          percentageOfGoal: 0
        })
      }
    }
  }
}
