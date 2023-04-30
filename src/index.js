import createKeyboard from "./render";
import { handlerUpKey } from "./handlerUpKey";
import { handlerDownKey } from "./handlerDownKey.js";
import { setAttribute } from "./setAtribute.js";

const keysArr = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "\\", "Del"],
    ["Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
    ["Shift Left", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "ArrowUp", "Shift Right"],
    ["Ctrl", "Win", "Alt", "Space", "Alt", "ArrowLeft", "ArrowDown", "ArrowRight", "Ctrl"],
];

createKeyboard(keysArr);

const keys = document.querySelectorAll(".keys");

const spaceKey = document.querySelector(".space-key");
const shiftLeft = document.querySelector(".shift-key-left");
const shiftRight = document.querySelector(".shift-key-right");
const capsLockKey = document.querySelector(".caps-lock-key");
const textInput = document.querySelector(".text");
const backspace = document.querySelector(".backspace-key");

setAttribute(keys);

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

    console.log("🚨: ", e.key);
    if (e.key.startsWith("Alt") || e.key.startsWith("Tab")) {
        e.preventDefault();
    }

    handlerDownKey(e.code.slice(startPos, e.code.length), keys);
});

window.addEventListener("keyup", (e) => {
    const isCaps = e.getModifierState && e.getModifierState("CapsLock");
    let startPos;
    if (e.code.startsWith("Key")) {
        startPos = 3;
    } else if (e.code.startsWith("Digit")) {
        startPos = 5;
    } else {
        startPos = 0;
    }

    handlerUpKey(e.code.slice(startPos, e.code.length), keys, isCaps);
});

window.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("keys")) {
        handlerDownKey(e.target.getAttribute("keyname"), keys);
    }
});
window.addEventListener("mouseup", (e) => {
    if (e.target.classList.contains("keys")) {
        handlerUpKey(e.target.getAttribute("keyname"), keys);
    }
});
