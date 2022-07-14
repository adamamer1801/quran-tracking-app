import { MMKV_Instance } from "./Instance";

type StorageReturnValues = string | number | boolean | null;

export function getFromStorage(key: string): StorageReturnValues {
    let stringValue = getStringFromStorage(key);
    if (stringValue !== null) return stringValue;
    let numberValue = getNumberFromStorage(key);
    if (numberValue !== null) return numberValue;
    let booleanValue = getBooleanFromStorage(key);
    if (booleanValue !== null) return booleanValue;
    return null;
}

export function getStringFromStorage(key: string): string | null {
    return MMKV_Instance.getString(key) || null;
}

export function getNumberFromStorage(key: string): number | null {
    return MMKV_Instance.getNumber(key) || null;
}

export function getBooleanFromStorage(key: string): boolean | null {
    return MMKV_Instance.getBoolean(key) || null;
}

export function setToStorage(key: string, value: any): void {
    MMKV_Instance.set(key, value);
}

export function deleteFromStorage(key: string): void {
    MMKV_Instance.delete(key);
}