import { handlerUpKey } from "./utils/handlerUpKey.js";
import { createKeyboard } from "./utils/createKeyboard.js";
import { handlerDownKey } from "./utils/handlerDownKey.js";
import { setAttribute } from "./utils/setAtribute.js";
import { keysArr } from "./utils/keysValue.js";
import { handlerDownKeyChangeValue } from "./utils/handlerDownKeyChangeValue.js";
import { handlerUpKeyChangeValue } from "./utils/handlerUpKeyChangeValue.js";
import { handlerDownMouseKeyChangeValue } from "./utils/handlerDownMouseKeyChangeValue.js";
import { handlerUpMouseKeyChangeValue } from "./utils/handlerUpMouseKeyChangeValue.js";

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

const spaceKey = document.querySelector(".space-key");
const shiftLeft = document.querySelector(".shift-key-left");
const shiftRight = document.querySelector(".shift-key-right");
const capsLockKey = document.querySelector(".caps-lock-key");
const textInput = document.querySelector(".text");
const backspace = document.querySelector(".backspace-key");

setAttribute(keys, keysArrEnAttr);

const inputValue = "";

window.addEventListener("keydown", (e) => {
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

    handlerDownKey(e.code.slice(startPos, e.code.length), keys, isCaps);
});

window.addEventListener("keyup", (e) => {
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
