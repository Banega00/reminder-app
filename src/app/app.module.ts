import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitPageComponent } from './habit-page/habit-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HabitCardComponent } from './habit-card/habit-card.component';
import { AddNewHabitDialogComponent } from './home-page/add-new-habit-dialog/add-new-habit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HabitPageComponent,
    HomePageComponent,
    HabitCardComponent,
    AddNewHabitDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
