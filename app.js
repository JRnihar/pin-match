function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + " "
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}


function generateNmuber() {
    const pin = getPin()

    document.getElementById('display-pin').value = pin;
}

function addNumber(event) {
    const inputNumber = event.target.innerText;
    const cacluInput = document.getElementById('input-filed');
    if (isNaN(inputNumber)) {
        if (inputNumber == "C") {
            cacluInput.value = " ";
        }
    } else {
        const previInput = cacluInput.value;
        const newNumber = previInput + inputNumber;
        cacluInput.value = newNumber
    }
}

function varyfyePin() {
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('input-filed').value;
    const successNumber = document.getElementById('notyfi-success');
    const erorNumber = document.getElementById('Eror-Number');
    if (pin == typeNumber) {
        successNumber.style.display = "none"
        erorNumber.style.display = "block"
    } else {
        successNumber.style.display = "block"
        erorNumber.style.display = "none"
    }

}