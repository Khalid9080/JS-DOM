
//step-1 :  set event handler
document.getElementById('button-login').addEventListener('click', function (event) {
    //console.log('login button clicked')

    //step - 2 : prevent deafult behaviour (prevent reloading browser)
    event.preventDefault();  // --> use .preventDefault() from a pagereload hobe na.

    //step - 3 : get the phone number & pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);


    //Step-5 : Validate Phone and pin number 

    //-- ! This is not the ideal way !/temporary ---
    if(phoneNumber==='5' && pinNumber==='123'){
        console.log('you are logged in');
        window.location.href='/home.html';
    }
    else{
        alert('Wrong phone number or pin');
    }



})