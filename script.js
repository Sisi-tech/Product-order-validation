function checkForm() {
    if (!checkQuantity()) {
        showError("#quantity");
    } else {
        removeError("#quantity");
    }
    if (!checkColor()) {
        showError("#color");
    } else {
        removeError("#color");
    }
    if (!checkState()) {
        showError("#state");
    } else {
        removeError("#state");
    }
    if (checkQuantity(), checkColor(), checkState()) {
        document.querySelector("#status").classList.remove("hidden");
    }
}

showError = (id) => {
    const input = document.querySelector(id);
    input.classList.add("error");
}
removeError = (id) => {
    const input = document.querySelector(id);
    input.classList.remove("error");
}

checkQuantity = () => {
    const input = document.querySelector("#quantity");
    if (input.value > 0) {
        return true;
    } 
    return false;
}

checkColor = () => {
    const input = document.querySelector("#color");
    if (input.value === "--") {
        return false;
    }
    return true;
}

checkState = () => {
    const input = document.querySelector("#state");
    if ((input.value).length === 2) {
        return true;
    }
    return false;
}

