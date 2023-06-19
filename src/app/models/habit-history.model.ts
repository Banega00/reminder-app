export enum HabitHistoryStatus{
    SUCCESSFUL = 'Successful',
    UNSUCCESSFUL = 'Unsuccessful',
}

export class HabitHistory{
    public date: Date;
    public value: number;

    public percentageOfGoal: number;
    
    public status: HabitHistoryStatus;
}