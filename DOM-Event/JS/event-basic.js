

console.log('Welcome to events');


//Mathod-2
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//Mathod-03 [rearly use*]
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;  // makeRed() - do not use ()

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


//Mathod-3a
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


//Mathod-4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

//Mathod-4a
const makeGreenButton = document.getElementById('make-green')
    makeGreenButton.addEventListener('click', function makeGreen() 
    {
        document.body.style.backgroundColor = 'green';
    }
)

// Final Mathod  [maximum use**]

    
document.getElementById('make-goldenrod').addEventListener('click',function()
{
    document.body.style.backgroundColor='goldenrod'
})