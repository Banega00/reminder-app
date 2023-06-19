import { HabitHistory } from "./habit-history.model";

export const HabitMeasurementOptions = {
    YES_NO: {
        slug: 'yes_no',
        description: 'Just mark if habit was done or not',
        display: 'Yes/No'
    },
    NUMERIC:{
        slug: 'numeric',
        description: 'Number that represent a quantity',
        display: 'Numeric'
    }
} 

export class HabitModel{
    public id: number;
    public title: string;
    public description: string;

    public measurementType: keyof typeof HabitMeasurementOptions;

    public goal: number;//if yes/no, goal is 1

    public dateCreated: Date;

    public history: HabitHistory[];

    public habitColor: string;

    constructor(obj?: Partial<HabitModel>) {
        obj?.id && (this.id = obj.id);
        obj?.title && (this.title = obj.title);
        obj?.description && (this.description = obj.description);
        obj?.measurementType && (this.measurementType = obj.measurementType);
        obj?.goal && (this.goal = obj.goal);
        obj?.dateCreated && (this.dateCreated = obj.dateCreated);
        obj?.history && (this.history = obj.history);
        obj?.habitColor && (this.habitColor = obj.habitColor);
    }
}