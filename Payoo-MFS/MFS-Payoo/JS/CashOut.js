document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

   const CashOut= document.getElementById('input-cash-out').value;
   const CashOutNumber=parseFloat(CashOut);

   const pinNumber= document.getElementById('input-cash-out-pin').value;
    console.log(CashOut,pinNumber);
    
    if(pinNumber==='1234'){
        const balance=document.getElementById('account-balance').innerText
        const balanceNumber=parseFloat(balance)

        //reduce the balance
        const newbalance=balanceNumber-CashOutNumber;

        //update the UI
        document.getElementById('account-balance').innerText=newbalance;
    }
    else{
        alert('Money is Reducing!')
    }
})