import { handlerUpKey } from "./utils/handlerUpKey.js";
import { createKeyboard } from "./utils/createKeyboard.js";
import { handlerDownKey } from "./utils/handlerDownKey.js";
import { setAttribute } from "./utils/setAtribute.js";
import { keysArr } from "./utils/keysValue.js";
import { handlerDownKeyChangeValue } from "./utils/handlerDownKeyChangeValue.js";
import { handlerUpKeyChangeValue } from "./utils/handlerUpKeyChangeValue.js";
import { handlerDownMouseKeyChangeValue } from "./utils/handlerDownMouseKeyChangeValue.js";
import { handlerUpMouseKeyChangeValue } from "./utils/handlerUpMouseKeyChangeValue.js";
import { handlerDownTextChangeValue } from "./utils/handlerDownTextChangeValue.js";

let isEnglish;
let isCaps;
let isShift;

const keysArrEnAttr = keysArr.EnSetAttr.reduce((acc, el) => [...acc, ...el], []);

if (localStorage.getItem("isEnglish") !== "undefined" && localStorage.getItem("isEnglish")) {
    isEnglish = JSON.parse(localStorage.getItem("isEnglish"));
    if (isEnglish) {
        createKeyboard(keysArr.En);
    } else {
        createKeyboard(keysArr.Ru);
    }
} else {
    createKeyboard(keysArr.En);
}

const keys = document.querySelectorAll(".keys");

setAttribute(keys, keysArrEnAttr);

window.addEventListener("keydown", (e) => {
    e.preventDefault();
    let startPos;
    if (e.code.startsWith("Key")) {
        startPos = 3;
    } else if (e.code.startsWith("Digit")) {
        startPos = 5;
    } else {
        startPos = 0;
    }

    const { en, shift, caps } = handlerDownKeyChangeValue(e, isEnglish, isShift, isCaps);

    isEnglish = en;
    isShift = shift;
    isCaps = caps;

    keys.forEach((el) => {
        if (el.getAttribute("keyname") === e.code.slice(startPos, e.code.length)) {
            handlerDownTextChangeValue(el.textContent);
        }
    });

    handlerDownKey(e.code.slice(startPos, e.code.length), keys, isCaps);
});

window.addEventListener("keyup", (e) => {
    e.preventDefault();
    let startPos;
    if (e.code.startsWith("Key")) {
        startPos = 3;
    } else if (e.code.startsWith("Digit")) {
        startPos = 5;
    } else {
        startPos = 0;
    }

    const { en, shift } = handlerUpKeyChangeValue(e, isEnglish, isShift, isCaps);

    isEnglish = en;
    isShift = shift;

    handlerUpKey(e.code.slice(startPos, e.code.length), keys);
});

window.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("keys")) {
        const { shift, caps } = handlerDownMouseKeyChangeValue(e, isEnglish, isShift, isCaps);
        isCaps = caps;
        isShift = shift;

        handlerDownTextChangeValue(e.target.textContent);
        handlerDownKey(e.target.getAttribute("keyname"), keys, isCaps);
    }
});
window.addEventListener("mouseup", (e) => {
    if (e.target.classList.contains("keys")) {
        const { shift } = handlerUpMouseKeyChangeValue(e, isEnglish, isShift, isCaps);
        isShift = shift;
        handlerUpKey(e.target.getAttribute("keyname"), keys);
    }
});
