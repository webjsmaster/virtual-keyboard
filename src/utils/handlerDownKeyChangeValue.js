import { changeValuesInKeys } from "./changeValuesInKeys.js";
import { keysArr } from "./keysValue.js";

function handlerDownKeyChangeValue(e, isEnglish, isShift, isCaps) {
    const keys = document.querySelectorAll(".keys");
    let en = isEnglish;
    let shift = isShift;
    let caps = isCaps;

    if (e.key.startsWith("Alt") || e.key.startsWith("Tab")) {
        e.preventDefault();
    }

    if (e.ctrlKey && e.altKey) {
        en = !en;
        changeValuesInKeys(keys, keysArr, en, shift, caps);
        localStorage.setItem("isEnglish", en);
    }

    if (e.shiftKey) {
        shift = true;
        changeValuesInKeys(keys, keysArr, en, shift, caps);
    }

    if (e.code === "CapsLock") {
        caps = !caps;
        changeValuesInKeys(keys, keysArr, en, shift, caps);
    }

    return { en, shift, caps };
}

export { handlerDownKeyChangeValue };
