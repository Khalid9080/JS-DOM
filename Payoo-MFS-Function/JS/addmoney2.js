


document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money')
    const pinNumber = getInputFieldValueById('input-pin-number')
    //console.log('Add Money Inside AddMoney2.js', addMoney,pinNumber);

    //wrong way to validate/fokira system --

    if(pinNumber===1234){

        const balance=getTextFieldById('account-balance');
        const newBalance=balance+addMoney;

        document.getElementById('account-balance').innerText=newBalance //ager text change kore upadte text ta show korbe
    }
    else{
        alert('failed to add the money')
    }
})