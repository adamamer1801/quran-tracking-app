import { getBooleanFromStorage, getFromStorage, getNumberFromStorage, setToStorage } from "../../MMKV/Storage";

export function ensureVarExistance() {
    addIfNotExists("isFirstLaunch", true);
    addIfNotExists("goal", 15);

    addIfNotExists("today__verses", 0);
    addIfNotExists("today__characters", 0)

    addIfNotExists("read__verses", 0)
    addIfNotExists("read__characters", 0);
}

function addIfNotExists(variable: string, valueIfNotExists: string | number | boolean) {
    if (getFromStorage(variable) === null) {
        setToStorage(variable, valueIfNotExists);
    }
}
