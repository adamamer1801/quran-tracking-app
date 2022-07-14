export function daysTillNextMonth(): number {
    let daysTillNextMonth;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthsWith31Days = [true, false, true, false, true, false, true, true, false, true, false, true]
    if (!monthsWith31Days[new Date().getUTCMonth()]) {
        if (new Date().getUTCMonth() == 2) daysTillNextMonth = 28 - new Date().getUTCDate();
        else daysTillNextMonth = 30 - new Date().getUTCDate();
    } else daysTillNextMonth = 31 - new Date().getUTCDate();
    return daysTillNextMonth;
}