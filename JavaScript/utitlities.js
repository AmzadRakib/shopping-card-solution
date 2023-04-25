function getSubTotalById(elementId) {
    const phoneTotalElement = document.getElementById(elementId)
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setValueUsingId(elementId, value) {
    const SubTotalElement = document.getElementById(elementId)
    SubTotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getSubTotalById('phone-total')
    const currentCaseTotal = getSubTotalById('case-total')
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setValueUsingId('sub-total', currentSubTotal);

    // Calculate Tax 

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setValueUsingId('tax', taxAmount);

    // calculate total 

    const finalAmount = currentSubTotal + taxAmount;
    setValueUsingId('final-total', finalAmount);
}