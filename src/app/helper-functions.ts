import { HabitHistory } from "./models/habit-history.model"

export const sortHistoryItems = (historyItems: HabitHistory[]) => {
    return historyItems.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
    })
}