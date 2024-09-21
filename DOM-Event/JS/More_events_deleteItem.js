


document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteButton=document.getElementById('btn-delete')

    if(text==='delete'){
        deleteButton.removeAttribute('disabled');
    }

    else{
        deleteButton.setAttribute('disabled',true)
    }
})


document.getElementById('btn-delete').addEventListener('click',function(){
    const secret=document.getElementById('secret-info');
    secret.style.display='none';
})


// document.getElementById('btn-delete').addEventListener('mouseenter',function(){  --> mouse delete button a jotobar nie jabo browser a toto bar event call hobe.
//     console.log('Event trigerd')
// })


// document.getElementById('btn-delete').addEventListener('mousemove',function(){  --> mouse delete button a jotobar nie jabo and move korbo browser a toto bar event call hobe.
//     console.log('Event trigerd')
// })



// document.getElementById('delete-confirm').addEventListener('focus',function(){     --> input field box a kisu type krar jonno click korle focus event kaj kore browser a.
//     console.log('Event trigerd')
// })


// document.getElementById('btn-delete').addEventListener('blur',function(){     --> Input field er baire faka jaegae click korle blur event call hobe.
//     console.log('Event trigerd')
// })






/*
       --------- How to get Full Input Elements value from using event parameter -------

document.getElementById('btn-delete').addEventListener('keydown',function(event){     
    console.log(event.target.value)
})

document.getElementById('btn-delete').addEventListener('keypress',function(event){     
    console.log(event.target.value)
})

**[use] document.getElementById('btn-delete').addEventListener('keyup',function(event){     
    console.log(event.target.value)
})





*/