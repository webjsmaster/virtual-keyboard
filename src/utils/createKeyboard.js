function createKeyboard(keysArr) {
    const body = document.querySelector("body")

    const app = document.createElement("div");
    app.classList.add("container");
    body.append(app)

    const wrapper = document.createElement("div");
    wrapper.classList.add("keyboard__wrapper");

    const textInput = document.createElement("textarea");
    textInput.classList.add("text");
    // textInput.disabled = true;
    app.append(textInput, wrapper);

    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard__keys");
    wrapper.append(keyboard);

    keysArr.forEach((arr) => {
        const row = document.createElement("div");
        row.classList.add("row");
        keyboard.append(row);
        arr.forEach((key, i) => {
            const keysElement = document.createElement("div");
            keysElement.classList.add("keys");
            switch (key) {
            case "Backspace":
                keysElement.classList.add("backspace-key");
                keysElement.textContent = key;
                break;
            case "Tab":
                keysElement.classList.add("tab-key");
                keysElement.textContent = key;
                break;
            case "Del":
                keysElement.classList.add("del-key");
                keysElement.textContent = key;
                break;
            case "Caps Lock":
                keysElement.classList.add("caps-lock-key");
                keysElement.textContent = key;
                break;
            case "Enter":
                keysElement.classList.add("enter-key");
                keysElement.textContent = key;
                break;
            case "Shift Right":
                keysElement.classList.add("shift-right-key");
                keysElement.textContent = key;
                break;
            case "Shift Left":
                keysElement.classList.add("shift-left-key");
                keysElement.textContent = key;
                break;
            case "Space":
                keysElement.classList.add("space");
                keysElement.textContent = key;
                break;
            case "Win":
                keysElement.classList.add("win-key");
                keysElement.textContent = key;
                break;
            case "ArrowUp":
                keysElement.classList.add("up-key");
                keysElement.textContent = "\u{25B2}";
                break;
            case "ArrowLeft":
                keysElement.classList.add("left-key");
                keysElement.textContent = "\u{25C0}";
                break;
            case "ArrowRight":
                keysElement.classList.add("right-key");
                keysElement.textContent = "\u{25B6}";
                break;
            case "ArrowDown":
                keysElement.classList.add("down-key");
                keysElement.textContent = "\u{25BC}";
                break;
            default:
                keysElement.textContent = key;
                break;
            }

            if (key === "Alt" && i === 2) {
                keysElement.classList.add("left-alt-key");
                keysElement.textContent = key;
            }

            if (key === "Alt" && i === 4) {
                keysElement.classList.add("right-alt-key");
                keysElement.textContent = key;
            }

            if (key === "Ctrl" && i === 0) {
                keysElement.classList.add("left-ctrl-key");
                keysElement.textContent = key;
            }

            if (key === "Ctrl" && i === 8) {
                keysElement.classList.add("right-ctrl-key");
                keysElement.textContent = key;
            }

            row.append(keysElement);
        });
    });

    const footerWrapper = document.createElement("div");
    footerWrapper.classList.add("footer__wrapper");
    app.append(footerWrapper);

    const footerTitle = document.createElement("div");
    footerTitle.classList.add("footer__title");
    footerTitle.textContent = "Клавиатура создана на ОС Windows!";

    const footerSubtitle = document.createElement("div");
    footerSubtitle.classList.add("footer__subtitle");
    footerSubtitle.textContent = "Для переключения раскладки необходимо использовать сочетнаие клавиш Left Ctrl + Left Alt!";

    footerWrapper.append(footerTitle, footerSubtitle);
}

export { createKeyboard };
