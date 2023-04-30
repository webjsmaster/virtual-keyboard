function handlerDownKey(key, keys) {
    const shiftLeft = document.querySelector(".shift-left-key");
    const shiftRight = document.querySelector(".shift-right-key");
    const arrowUp = document.querySelector(".up-key");
    const arrowLeft = document.querySelector(".left-key");
    const arrowRight = document.querySelector(".right-key");
    const arrowDown = document.querySelector(".down-key");

    for (let i = 0; i < keys.length; i++) {
        console.log("⭐: ", key);

        if (key === keys[i].getAttribute("keyname") || key === keys[i].getAttribute("lowerCaseName")) {
            keys[i].classList.add("active");
        }

        if (key === "ShiftLeft") {
            shiftLeft.classList.add("active");
        }

        if (key === "ShiftRight") {
            shiftRight.classList.add("active");
        }

        if (key === "ArrowUp") {
            arrowUp.classList.add("active");
        }

        if (key === "ArrowLeft") {
            arrowLeft.classList.add("active");
        }
        if (key === "ArrowRight") {
            arrowRight.classList.add("active");
        }
        if (key === "ArrowDown") {
            arrowDown.classList.add("active");
        }
    }
}

export { handlerDownKey };
