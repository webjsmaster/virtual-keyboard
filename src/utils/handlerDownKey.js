function handlerDownKey(key, keys, isCaps) {
    const shiftLeft = document.querySelector(".shift-left-key");
    const shiftRight = document.querySelector(".shift-right-key");
    const capsLockKey = document.querySelector(".caps-lock-key");

    if (isCaps) {
        capsLockKey.classList.add("active");
    } else {
        capsLockKey.classList.remove("active");
    }

    for (let i = 0; i < keys.length; i++) {
        if (key === keys[i].getAttribute("keyname") && keys[i].getAttribute("keyname") !== "Caps Lock") {
            keys[i].classList.add("active");
        }

        if (key === "ShiftLeft") {
            shiftLeft.classList.add("active");
        }

        if (key === "ShiftRight") {
            shiftRight.classList.add("active");
        }
    }
}

export { handlerDownKey };
