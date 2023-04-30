import createKeyboard from "./render";

const keysArr = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "\\"],
    ["Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
    ["Shift Left", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift Right"],
    ["Ctrl", "Win", "Alt", "Space", "Alt", "Fn", "Ctrl"],
];

createKeyboard(keysArr);

const keys = document.querySelectorAll(".keys");
const spaceKey = document.querySelector(".space-key");
const shiftLeft = document.querySelector(".shift-key-left");
const shiftRight = document.querySelector(".shift-key-right");
const capsLockKey = document.querySelector(".caps-lock-key");

const textInput = document.querySelector(".text");
const backspace = document.querySelector(".backspace-key");

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute("keyname", keys[i].innerText);
    keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
}

let inputValue = "";

const isLongPress = false;

function handlerKeyup(key) {
    if (key === "Backspace") {
        inputValue = inputValue.slice(0, -1);
        console.log("📢 [script.js:33]", key);
    } else {
        inputValue += key;
    }
    textInput.value = inputValue;

    console.log("📢 [script.js:38]", key);
}

const keyUp = false;

window.addEventListener("keydown", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key === keys[i].getAttribute("keyname") || e.key === keys[i].getAttribute("lowerCaseName")) {
            keys[i].classList.add("active");
        }
        if (e.code === "Space") {
            spaceKey.classList.add("active");
        }
        // if (e.code === "ShiftLeft") {
        //     shiftLeft.classList.add("active");
        // }
        // if (e.code === "ShiftRight") {
        //     shiftRight.classList.add("active");
        // }
        if (e.code === "CapsLock") {
            capsLockKey.classList.add("active");
        }
        if (e.code === "Backspace") {
            backspace.classList.toggle("active");
        }
    }
});

window.addEventListener("keyup", (e) => {
    for (let i = 0; i < keys.length; i++) {
        if (e.key === keys[i].getAttribute("keyname") || e.key === keys[i].getAttribute("lowerCaseName")) {
            keys[i].classList.remove("active");
            keys[i].classList.add("remove");
        }
        if (e.code === "Space") {
            spaceKey.classList.remove("active");
            spaceKey.classList.add("remove");
        }
        // if (e.code === "ShiftLeft") {
        //     shiftLeft.classList.remove("active");
        //     shiftLeft.classList.remove("remove");
        // }
        // if (e.code === "ShiftRight") {
        //     shiftRight.classList.remove("active");
        //     shiftRight.classList.remove("remove");
        // }
        if (e.code === "CapsLock") {
            capsLockKey.classList.toggle("active");
            capsLockKey.classList.toggle("remove");
        }
        if (e.code === "ControlLeft") {
            shiftRight.classList.remove("active");
            shiftLeft.classList.remove("remove");
        }

        if (e.code === "Backspace") {
            backspace.classList.remove("active");
            backspace.classList.remove("remove");
        }

        setTimeout(() => {
            keys[i].classList.remove("remove");
        }, 200);
    }

    console.log("🚨: ", e.key);
    if (e.key === "Shift") {
        shiftLeft.classList.toggle("active");
    }

    handlerKeyup(e.key);
});
