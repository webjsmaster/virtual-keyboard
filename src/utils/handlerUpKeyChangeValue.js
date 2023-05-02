import { changeValuesInKeys } from "./changeValuesInKeys.js";
import { keysArr } from "./keysValue.js";

function handlerUpKeyChangeValue(e, isEnglish, isShift, isCaps) {
    const keys = document.querySelectorAll(".keys");
    const en = isEnglish;
    let shift = isShift;

    if (e.key === "Shift") {
        shift = false;
        changeValuesInKeys(keys, keysArr, en, shift, isCaps);
    }

    return { en, shift };
}

export { handlerUpKeyChangeValue };
