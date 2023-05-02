function handlerDownTextChangeValue(value) {
    const textInput = document.querySelector(".text");
    let inputValue = textInput.value;
    let cursor = textInput.selectionStart;

    const startValue = inputValue.slice(0, cursor);
    const endValue = inputValue.slice(cursor, inputValue.length);

    if (value.length <= 1) {
        inputValue = startValue + value + endValue;
        cursor += 1;
    } else {
        switch (value) {
        case "Backspace": {
            inputValue = startValue.slice(0, -1) + endValue;
            cursor -= 1;
            break;
        }
        case "Del": {
            inputValue = startValue + endValue.slice(1);
            break;
        }
        case "Tab": {
            inputValue = `${startValue}\t${endValue}`;
            cursor += 1;
            break;
        }
        case "Space": {
            inputValue = `${startValue} ${endValue}`;
            cursor += 1;
            break;
        }
        case "Enter": {
            inputValue = `${startValue}\r\n${endValue}`;
            cursor += 1;
            break;
        }
        default: {
            break;
        }
        }
    }

    textInput.value = inputValue;
    textInput.selectionStart = cursor;
    textInput.selectionEnd = cursor;
}

export { handlerDownTextChangeValue };
