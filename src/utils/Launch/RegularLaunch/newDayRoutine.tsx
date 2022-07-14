import { getStringFromStorage, setToStorage } from "../../MMKV/Storage";

export function newDayRoutine() {
    if (getStringFromStorage("lastLaunchDate") === null) {
        setToStorage("lastLaunchDate", new Date().getUTCDay() + "-" + new Date().getUTCMonth() + "-" + new Date().getUTCFullYear());
    } else {
        let lastLaunchDate = getStringFromStorage("lastLaunchDate")?.split("-");
        if (lastLaunchDate?.length != 3) return;

        if (
            lastLaunchDate[0] !== new Date().getUTCDay().toString() 
        || lastLaunchDate[1] !== new Date().getUTCMonth().toString() 
        || lastLaunchDate[2] !== new Date().getUTCFullYear().toString()
        ) 
        {

            setToStorage("lastLaunchDate", new Date().getUTCDay() + "-" + new Date().getUTCMonth() + "-" + new Date().getUTCFullYear());
            setToStorage("today__verses", 0);
            setToStorage("today__characters", 0);
        }
    }
}