import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HabitMeasurementOptions, HabitModel } from 'src/app/models/habit.model';


@Component({
  selector: 'app-add-new-habit-dialog',
  templateUrl: './add-new-habit-dialog.component.html',
  styleUrls: ['./add-new-habit-dialog.component.css']
})
export class AddNewHabitDialogComponent {

  public habitMeasurementOptions = HabitMeasurementOptions;
  public newHabit: HabitModel = new HabitModel({habitColor: 'blue'});
  
  public newHabitForm :FormGroup;

  constructor(private dialogRef: MatDialogRef<AddNewHabitDialogComponent>) {
    this.newHabitForm = new FormBuilder().group({
      title: new FormControl(this.newHabit.title, Validators.required),
      description: new FormControl(this.newHabit.description),
      measurementType: new FormControl(this.newHabit.measurementType,Validators.required),
      goal: new FormControl(this.newHabit.goal),
      unit: new FormControl(this.newHabit.unit),
      habitColor: new FormControl(this.newHabit.habitColor)
    });

    this.newHabitForm.get('goal')?.addValidators([this.requiredIfNumericMeasurementValidator(this.newHabitForm)])
    this.newHabitForm.get('unit')?.addValidators([this.requiredIfNumericMeasurementValidator(this.newHabitForm)])
  }

  public requiredIfNumericMeasurementValidator(form: FormGroup): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const needRequire = form.get('measurementType')?.value == 'NUMERIC';
      const noValue = needRequire ? !(control.value) : false
      return noValue ? {required: control.value} : null;
    };
  }

  closeDialog() {
    this.dialogRef.close({ save: false });
  }

  saveNewHabit() {
    this.dialogRef.close({ save: true, newHabit: this.newHabit })
  }
}
