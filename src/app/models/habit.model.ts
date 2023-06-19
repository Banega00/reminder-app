import { HabitHistory } from "./habit-history.model";

export enum HabitMeasurementType {
    YES_NO = 'Yes/No',
    NUMBER = 'Number',
}

export class HabitModel{
    public id: number;
    public title: string;

    public measurementType: HabitMeasurementType;

    public goal: number;//if yes/no, goal is 1

    public dateCreated: Date;

    public history: HabitHistory[];

    public habitColor: string;

    constructor(obj?: Partial<HabitModel>) {
        obj?.id && (this.id = obj.id);
        obj?.title && (this.title = obj.title);
        obj?.measurementType && (this.measurementType = obj.measurementType);
        obj?.goal && (this.goal = obj.goal);
        obj?.dateCreated && (this.dateCreated = obj.dateCreated);
        obj?.history && (this.history = obj.history);
        obj?.habitColor && (this.habitColor = obj.habitColor);

    }
}