
const sections=document.querySelectorAll('section');
    //console.log(sections);

    for(const section of sections){
        section.style.border='2px solid steelblue';
        section.style.marginBottom='5px';
        section.style.borderRadius='15px';
        section.style.padding='7px';
        section.style.backgroundColor='lightgray';
    }
const id=document.getElementById('id2');
id.style.backgroundColor='tomato';

//adding

const class1bg=document.getElementById('id1');
class1bg.classList.add('color');
class1bg.classList.remove('color');