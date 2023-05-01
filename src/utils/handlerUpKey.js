function handlerUpKey(key, keys) {
    const capsLockKey = document.querySelector(".caps-lock-key");
    const shiftLeft = document.querySelector(".shift-left-key");
    const shiftRight = document.querySelector(".shift-right-key");
    const arrowUp = document.querySelector(".up-key");
    const arrowLeft = document.querySelector(".left-key");
    const arrowRight = document.querySelector(".right-key");
    const arrowDown = document.querySelector(".down-key");

    for (let i = 0; i < keys.length; i++) {
        if (key === keys[i].getAttribute("keyname") && keys[i].getAttribute("keyname") !== "Caps Lock") {
            keys[i].classList.remove("active");
            keys[i].classList.add("remove");
        }

        if (key === "ShiftLeft") {
            shiftLeft.classList.remove("active");
            shiftLeft.classList.add("remove");
        }

        if (key === "ShiftRight") {
            shiftRight.classList.remove("active");
            shiftRight.classList.add("remove");
        }

        setTimeout(() => {
            keys[i].classList.remove("remove");
        }, 200);
    }
}

export { handlerUpKey };
