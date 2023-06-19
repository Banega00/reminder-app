import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habit-card',
  templateUrl: './habit-card.component.html',
  styleUrls: ['./habit-card.component.css']
})
export class HabitCardComponent {

  @Input() habit: any;
}
