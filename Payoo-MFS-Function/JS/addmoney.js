
/**
 * repated kora lage bar bar
 *  How to get a number from an input
 * 1. create a variable 
 * 2. right side document.getElementById(id)
 * 3. value
 * 4. parseFloet()
 */

document.getElementById('btn-add-money').addEventListener('click', function (event) {


    event.preventDefault();
    //getInputFieldValueById(); --> [we can call a function which is in another js file.]

    // const addMoney=getInputFieldValueById();
    // console.log('Add money value: ',addMoney);
    //Insted of using this we use function--
    // const addMoney=document.getElementById('input-add-money').value
    // const addMoneyNumber=parseFloat(addMoney);

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    console.log('add money with parameter', addMoney, pinNumber)

})