import { getCurrentDayOfYear } from "./getCurrentDayOfYear";

export function daysTillNextYear() {
    if (new Date().getFullYear() % 4 === 0) return 366 - getCurrentDayOfYear(); 
    else return 365 - getCurrentDayOfYear();
}