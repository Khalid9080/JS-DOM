

document.getElementById('btn-show-cash-out').addEventListener('click',function(){
     
   
    // Show the cash Out page using .remove('hidden') -> it will make it hidden to visible.
    document.getElementById('cash-out-form').classList.remove('hidden');

     // Hid ethe cash Out page using .add('hidden') -> it will make it visible to hidden.
    document.getElementById('add-money-form').classList.add('hidden');
})


// Show add money form and hide the cash out form
document.getElementById('btn-show-add-money').addEventListener('click',function(){

    // Show the add money page using .remove('hidden') -> it will make it hidden to visible.
    document.getElementById('add-money-form').classList.remove('hidden');

    // Hide the add money page using .add('hidden') -> it will make it hidden to visible.
    document.getElementById('cash-out-form').classList.add('hidden');

})