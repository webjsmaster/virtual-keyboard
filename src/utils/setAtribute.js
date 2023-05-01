function setAttribute(keys, keysArrEnAttr) {
    for (let i = 0; i < keys.length; i++) {
        if (keysArrEnAttr[i] === "{") {
            keys[i].setAttribute("keyname", "BracketLeft");
        } else if (keysArrEnAttr[i] === "}") {
            keys[i].setAttribute("keyname", "BracketRight");
        } else if (keysArrEnAttr[i] === "\\") {
            keys[i].setAttribute("keyname", "Backslash");
        } else if (keysArrEnAttr[i] === "Del") {
            keys[i].setAttribute("keyname", "Delete");
        } else if (keysArrEnAttr[i] === "`") {
            keys[i].setAttribute("keyname", "Backquote");
        } else if (keysArrEnAttr[i] === "'") {
            keys[i].setAttribute("keyname", "Quote");
        } else if (keysArrEnAttr[i] === ";") {
            keys[i].setAttribute("keyname", "Semicolon");
        } else if (keysArrEnAttr[i] === ",") {
            keys[i].setAttribute("keyname", "Comma");
        } else if (keysArrEnAttr[i] === ".") {
            keys[i].setAttribute("keyname", "Period");
        } else if (keysArrEnAttr[i] === "/") {
            keys[i].setAttribute("keyname", "Slash");
        } else if (keysArrEnAttr[i] === "Ctrl" && i === 55) {
            keys[i].setAttribute("keyname", "ControlLeft");
        } else if (keysArrEnAttr[i] === "Ctrl" && i === 63) {
            keys[i].setAttribute("keyname", "ControlRight");
        } else if (keysArrEnAttr[i] === "Alt" && i === 57) {
            keys[i].setAttribute("keyname", "AltLeft");
        } else if (keysArrEnAttr[i] === "Alt" && i === 59) {
            keys[i].setAttribute("keyname", "AltRight");
        } else if (keysArrEnAttr[i] === "Win") {
            keys[i].setAttribute("keyname", "MetaLeft");
        } else if (keysArrEnAttr[i] === "-") {
            keys[i].setAttribute("keyname", "Minus");
        } else if (keysArrEnAttr[i] === "=") {
            keys[i].setAttribute("keyname", "Equal");
        } else if (keysArrEnAttr[i] === "\u{25B2}") {
            keys[i].setAttribute("keyname", "ArrowUp");
        } else if (keysArrEnAttr[i] === "\u{25C0}") {
            keys[i].setAttribute("keyname", "ArrowLeft");
        } else if (keysArrEnAttr[i] === "\u{25B6}") {
            keys[i].setAttribute("keyname", "ArrowRight");
        } else if (keysArrEnAttr[i] === "\u{25BC}") {
            keys[i].setAttribute("keyname", "ArrowDown");
        } else {
            keys[i].setAttribute("keyname", keysArrEnAttr[i]);
        }
    }
}

export { setAttribute };
