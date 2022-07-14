import { MMKV } from "react-native-mmkv";

export let MMKV_Instance: MMKV;

export function initializeMMKVStorage() {
    MMKV_Instance = new MMKV()
}