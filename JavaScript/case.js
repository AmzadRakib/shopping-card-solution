function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const currentCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = currentCaseNumber + 1;
    }
    else {
        newCaseNumber = currentCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateTotalCasePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const totalCaseElement = document.getElementById('case-total');
    totalCaseElement.innerText = caseTotalPrice;
}




document.getElementById('btn-plus-case').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateTotalCasePrice(newCaseNumber)
    calculateSubTotal()

})

document.getElementById('btn-minus-case').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateTotalCasePrice(newCaseNumber)
    calculateSubTotal()
})