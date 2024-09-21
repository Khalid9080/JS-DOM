

/**
 *  --> We will use a common shared function here
 */

// function getInputFieldValueById() {
//     // console.log('Will get value bu id')

//     const addMoney = document.getElementById('input-add-money').value
//     return addMoney; // koto taka add hoilo eita abar addmoney.js file er kase jabe jekhae function ta call kora hoise

// }



function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value
    return inputValue;

}