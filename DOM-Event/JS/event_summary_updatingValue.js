
  //mathod-1
  function handleOnClick() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Sazim Rahman';
}

//mathod-2
document.getElementById('event-lisener').addEventListener('click', function() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Nazifa';
})

   // Update Operation-------
   document.getElementById('btn-update').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display')
    p.innerText = inputText;

    
})