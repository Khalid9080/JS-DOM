
/**
 * .stopImmediatePropagation() --
 * -> eta use korle jei id te use kore propagation event call kora hoise,
 *    shudhu matro oi id er jonno ekbar propagation event call hobe. 
 *    onno kno tar jonno event r call hobe na.
 *.stopPropagation() ---
 * -> Eta use korle ekbar off korbe       
 * 
 * 
 */


document.getElementById('list-container').addEventListener('click',function(){
    console.log('list-container Clicked')
    
})
document.getElementById('list-ul').addEventListener('click',function(){
    console.log('ul Clicked')
})
document.getElementById('item-2').addEventListener('click',function(event){
    console.log('Item-2 Clicked')
    event.stopImmediatePropagation(); // eta use korle 
})