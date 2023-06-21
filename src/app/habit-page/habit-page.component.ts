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
export class HabitPageComponent implements OnInit{
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
      const dayMonth = date.getDate() + (date.getMonth() + 1);
      
      return `date${dayMonth}`;
    }
  }

  selectedDateChange(date: Date | null){
    const historyItem = this.habit.history.find((historyItem, index) => {
      return moment(date).isSame(historyItem.date, 'day');
    })

    if(historyItem){
      this.selectedHistoryItem = historyItem;
      this.selectedHistoryItemIndex = this.habit.history.indexOf(historyItem);
    }else{
      this.selectedHistoryItem = {
        date: date!,
        value: 0,
        percentageOfGoal: 0,
        status: HabitHistoryStatus.UNSUCCESSFUL
      }
    }
  }

  ngOnInit() {
    setTimeout(() => {

      for (let historyItem of this.habit.history) {
        const dayMonth = historyItem.date.getDate() + (historyItem.date.getMonth() + 1);
        const el = document.querySelector(`.date${dayMonth}`);

        el?.setAttribute('value', historyItem.value.toString());

        // el.add

        if (this.habit.measurementType == 'NUMERIC') {
          if (historyItem.value > this.habit.goal!) {
            this.renderer.addClass(el, 'green');
          } else {
            this.renderer.addClass(el, 'red');
          }
        }else if(this.habit.measurementType == 'YES_NO'){
          if(historyItem.value == 1){
            this.renderer.addClass(el, 'green');
          }else{
            this.renderer.addClass(el, 'red');
          }
        }
      }
    },0)

  }

  formatDate(date: Date, format?: string){
    return moment(date).format(format ?? 'MMMM Do YYYY');
  }

  monthSelected(_: any){
    console.log('aaa')
  }
}
