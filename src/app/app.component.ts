import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reminder-app';

  private habits = [
    {
      id: 1,
      text: 'This is my first habit'
    }
  ]
}
