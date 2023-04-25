function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const currentPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;

    if (isIncrease) {
        newPhoneNumber = currentPhoneNumber + 1;
    }
    else {
        newPhoneNumber = currentPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function UpdateTotalPhonePrice(newPhoneNumber) {
    const totalPhonePrice = newPhoneNumber * 1219;
    const totalPhoneElement = document.getElementById('phone-total');
    totalPhoneElement.innerText = totalPhonePrice;
}



document.getElementById('btn-plus-phone').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    UpdateTotalPhonePrice(newPhoneNumber);
    calculateSubTotal()
})

document.getElementById('btn-minus-phone').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    UpdateTotalPhonePrice(newPhoneNumber);
    calculateSubTotal()
})