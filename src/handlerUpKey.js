function handlerUpKey(key, keys, isCaps) {
    const capsLockKey = document.querySelector(".caps-lock-key");
    const shiftLeft = document.querySelector(".shift-left-key");
    const shiftRight = document.querySelector(".shift-right-key");
    const arrowUp = document.querySelector(".up-key");
    const arrowLeft = document.querySelector(".left-key");
    const arrowRight = document.querySelector(".right-key");
    const arrowDown = document.querySelector(".down-key");

    if (isCaps) {
        capsLockKey.classList.add("active");
    } else {
        capsLockKey.classList.remove("active");
    }

    // console.log("🌻:", key);

    for (let i = 0; i < keys.length; i++) {
        if (key === keys[i].getAttribute("keyname") || key === keys[i].getAttribute("lowerCaseName")) {
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

        if (key === "ArrowUp") {
            arrowUp.classList.remove("active");
            arrowUp.classList.add("remove");
        }

        if (key === "ArrowLeft") {
            arrowLeft.classList.remove("active");
            arrowLeft.classList.add("remove");
        }

        if (key === "ArrowRight") {
            arrowRight.classList.remove("active");
            arrowRight.classList.add("remove");
        }

        if (key === "ArrowDown") {
            arrowDown.classList.remove("active");
            arrowDown.classList.add("remove");
        }

        setTimeout(() => {
            keys[i].classList.remove("remove");
        }, 200);
    }
}

export { handlerUpKey };
