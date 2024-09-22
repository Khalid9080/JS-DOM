

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

function showAsectionById(id){
    //hided all the sections
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
    console.log('utitlites asdddad');
    // show the section with the provided id as parameter

    document.getElementById(id).classList.remove('hidden');




}