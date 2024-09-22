

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut= getInputFieldValueById('input-cash-out')
    const pinNUmber= getInputFieldValueById('input-cash-out-pin')
    console.log('Inside the handler', cashOut)
    //console.log('inside the click handler')

    if(pinNUmber===123){
        const balance = getInputFieldValueById('account-balance')
       const newBalance=balance-cashOut;

       document.getElementById('account-balance').innerText=newBalance
       
    }
    else{
        alert('no money for u')
    }
})