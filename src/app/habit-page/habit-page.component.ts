import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitModel } from '../models/habit.model';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-habit-page',
  templateUrl: './habit-page.component.html',
  styleUrls: ['./habit-page.component.css']
})
export class HabitPageComponent implements OnInit{
  public habit:HabitModel;
  private listeners: (() => void)[] = [];
  constructor(private route: ActivatedRoute, private renderer: Renderer2) {
    console.log(history.state.habit)
    this.habit = history.state.habit;
  }


  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const dayMonth = date.getDate() + (date.getMonth() + 1);
      
      return `date${dayMonth}`;
    }
  }

  ngOnInit() {
    setTimeout(() => {

      for (let historyItem of this.habit.history) {
        const dayMonth = historyItem.date.getDate() + (historyItem.date.getMonth() + 1);
        const el = document.querySelector(`.date${dayMonth}`);

        console.log(this.habit.measurementType)

        if (this.habit.measurementType == 'NUMERIC') {
          if (historyItem.value > this.habit.goal!) {
            this.renderer.addClass(el, 'green');
          } else {
            this.renderer.addClass(el, 'red');
          }
        }
      }
    },0)

  }
}
