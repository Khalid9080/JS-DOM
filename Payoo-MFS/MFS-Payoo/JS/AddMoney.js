

//stp1 : add an event handler to the add money inside the form

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page realod form submit
    event.preventDefault();

//stp2 : Get money to be added and also the pin number to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    const addPinInput = document.getElementById('input-pin-number').value;
    console.log(addPinInput);

//stp3 : Verify the pin number--

//--> ! wrong Validation : wrong way to validated the account, we will know latter.
if(addPinInput==='1234'){
    console.log('adding money to your account');
}
else{
    alert('Failed to add money! please try again');
}

//stp4 : Get the current balance
//--> value kaj korbe na karon account-balance kni input field na, eta ekta div.innerText kaj korbe karon div er vitor text ase.
const balance=document.getElementById('account-balance').innerText
console.log(balance);

//stp5 : Add addMoneyInput with balance.
//--> make string to number convertion using parseFloat()
const addMoneyNumber = parseFloat(addMoneyInput);
const balanceNumber = parseFloat(balance);

const newBalance = balanceNumber+addMoneyNumber;
console.log(newBalance)

//stp6 : Update the balance in UI
document.getElementById('account-balance').innerText=newBalance;
 
})

