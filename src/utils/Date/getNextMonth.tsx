export function getNextMonth() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[(new Date().getUTCMonth()) + 1];
}