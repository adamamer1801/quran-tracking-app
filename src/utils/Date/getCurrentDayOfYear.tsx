export function getCurrentDayOfYear(): number {
    let now = new Date;
    let start: number = new Date(now.getFullYear(), 0, 0).getTime();
    let diff = Date.now() - start;
    let oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}