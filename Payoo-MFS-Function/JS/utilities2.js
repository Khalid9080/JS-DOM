

function getInputFieldValueById(id){

    const inputValue=document.getElementById(id).value  // jekono kono input field er value nie kaj korbe
    const inputNumber = parseFloat(inputValue)

    return inputNumber
}


function getTextFieldById(id){
    const textValue=document.getElementById(id).innerText;  // jekono field er text nia kaj morbe
    const textNumber=parseFloat(textValue)
    return textNumber
}