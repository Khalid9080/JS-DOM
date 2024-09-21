



document.getElementById('btn-add-money').addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value // .value means ami jei value ta input dicchi oi value.
    const addMoneyNumber = parseFloat(addMoney)
    const pinNumber = document.getElementById('input-pin-number').value
    console.log(addMoney, pinNumber);


    // wrong way to verify pin

    if (pinNumber === '1234') {

        const balance = document.getElementById('account-balance').innerText;
        // const newAddMoney = parseFloat(addMoney);
        const newBalance = parseFloat(balance);

        const TotalBalance = newBalance + addMoneyNumber;
        // console.log(TotalBalance);

        //Set the new balance

        document.getElementById('account-balance').innerText=TotalBalance;
    }
    else {
        alert('Failed to add money')
    }
})