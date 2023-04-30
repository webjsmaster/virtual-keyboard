function createKeyboard(keysArr) {
    const app = document.querySelector("#app");

    const wrapper = document.createElement("div");
    wrapper.classList.add("keyboard__wrapper");

    const textInput = document.createElement("div");
    textInput.classList.add("text");
    app.append(wrapper, textInput);

    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard__keys");
    wrapper.append(keyboard);

    keysArr.forEach((arr, i) => {
        const row = document.createElement("div");
        row.classList.add("row");
        keyboard.append(row);
        arr.forEach((key) => {
            const keysElement = document.createElement("div");
            keysElement.classList.add("keys");
            switch (key) {
            case "Backspace":
                keysElement.classList.add("backspace-key");
                break;
            case "Tab":
                keysElement.classList.add("tab-key");
                break;
            case "Caps Lock":
                keysElement.classList.add("caps-lock-key");
                break;
            case "Enter":
                keysElement.classList.add("enter-key");
                break;
            case "Shift Right":
                keysElement.classList.add("shift-key-right");
                break;
            case "Shift Left":
                keysElement.classList.add("shift-key-left");
                break;
            case "Space":
                keysElement.classList.add("space-key");
                break;
            default:
                break;
            }
            keysElement.textContent = key;
            row.append(keysElement);
        });
    });
}

export default createKeyboard;
