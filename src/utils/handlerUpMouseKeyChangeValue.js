import { changeValuesInKeys } from "./changeValuesInKeys.js";
import { keysArr } from "./keysValue.js";

function handlerUpMouseKeyChangeValue(e, isEnglish, isShift, isCaps) {
    const keys = document.querySelectorAll(".keys");
    let shift = isShift;

    if (e.target.getAttribute("keyname").startsWith("Shift")) {
        shift = false;
        changeValuesInKeys(keys, keysArr, isEnglish, shift, isCaps);
    }

    return { shift };
}

export { handlerUpMouseKeyChangeValue };
