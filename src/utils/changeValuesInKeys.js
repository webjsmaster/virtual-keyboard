function toggleShift(arr, caseStatus) {
    return arr.reduce((acc, el) => {
        el.forEach((e) => {
            if (/^[А-Яа-яA-Za-z_]*$/.test(e) && e.length <= 1) {
                if (caseStatus === "up") {
                    acc.push(e.toUpperCase());
                } else if (caseStatus === "down") {
                    acc.push(e.toLowerCase());
                } else {
                    acc.push(e);
                }
            } else {
                acc.push(e);
            }
        });
        return acc;
    }, []);
}

function changeValuesInKeys(keys, keysArr, isEnglish, isShift, isCaps) {
    const keysArrRu = keysArr.Ru.reduce((acc, el) => [...acc, ...el], []);
    const keysArrEn = keysArr.En.reduce((acc, el) => [...acc, ...el], []);

    let arr;

    if (isEnglish) {
        if (!isCaps && !isShift) {
            arr = keysArrEn;
        } else if (isCaps && !isShift) {
            arr = toggleShift(keysArr.En, "up");
        } else if (!isCaps && isShift) {
            arr = toggleShift(keysArr.EnShift, "up");
        } else {
            arr = toggleShift(keysArr.EnShift, "down");
        }
    } else if (!isEnglish) {
        if (!isCaps && !isShift) {
            arr = keysArrRu;
        } else if (isCaps && !isShift) {
            arr = toggleShift(keysArr.Ru, "up");
        } else if (!isCaps && isShift) {
            arr = toggleShift(keysArr.RuShift, "up");
        } else {
            arr = toggleShift(keysArr.RuShift, "down");
        }
    }

    keys.forEach((key, i) => {
        if (key.textContent !== arr[i] && !key.getAttribute("keyname").startsWith("Arrow")) {
            key.textContent = arr[i];
        }
    });
}

export { changeValuesInKeys };
