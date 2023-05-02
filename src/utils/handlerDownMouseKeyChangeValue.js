import { keysArr } from "./keysValue.js";
import { changeValuesInKeys } from "./changeValuesInKeys.js";

function handlerDownMouseKeyChangeValue(e, isEnglish, isShift, isCaps) {
    const keys = document.querySelectorAll(".keys");
    let caps = isCaps;
    let shift = isShift;

    if (e.target.getAttribute("keyname").startsWith("Shift")) {
        shift = true;
        changeValuesInKeys(keys, keysArr, isEnglish, shift, caps);
    }

    if (e.target.getAttribute("keyname") === "Caps Lock") {
        caps = !caps;
        changeValuesInKeys(keys, keysArr, isEnglish, shift, caps);
    }

    return { shift, caps };
}

export { handlerDownMouseKeyChangeValue };
