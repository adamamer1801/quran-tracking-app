import { initializeMMKVStorage } from "../../MMKV/Instance";
import { ensureVarExistance } from "./ensureVarExistance";
import { newDayRoutine } from "./newDayRoutine";

export async function launch() {
    await initializeMMKVStorage();
    newDayRoutine()
    ensureVarExistance()
}
