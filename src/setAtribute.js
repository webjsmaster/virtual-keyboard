function setAttribute(keys) {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].textContent === "{") {
            keys[i].setAttribute("keyname", "BracketLeft");
        } else if (keys[i].textContent === "}") {
            keys[i].setAttribute("keyname", "BracketRight");
        } else if (keys[i].textContent === "\\") {
            keys[i].setAttribute("keyname", "Backslash");
        } else if (keys[i].textContent === "Del") {
            keys[i].setAttribute("keyname", "Delete");
        } else if (keys[i].textContent === "`") {
            keys[i].setAttribute("keyname", "Backquote");
        } else if (keys[i].textContent === "Ctrl" && i === 55) {
            keys[i].setAttribute("keyname", "ControlLeft");
        } else if (keys[i].textContent === "Ctrl" && i === 63) {
            keys[i].setAttribute("keyname", "ControlRight");
        } else if (keys[i].textContent === "Alt" && i === 57) {
            keys[i].setAttribute("keyname", "AltLeft");
        } else if (keys[i].textContent === "Alt" && i === 59) {
            keys[i].setAttribute("keyname", "AltRight");
        } else if (keys[i].textContent === "Win") {
            keys[i].setAttribute("keyname", "MetaLeft");
        } else if (keys[i].textContent === "-") {
            keys[i].setAttribute("keyname", "Minus");
        } else if (keys[i].textContent === "=") {
            keys[i].setAttribute("keyname", "Equal");
        } else {
            keys[i].setAttribute("keyname", keys[i].innerText);
        }
        // keys[i].setAttribute("lowerCaseName", keys[i].innerText.toLowerCase());
    }
}

export { setAttribute };
