const inputLink = document.getElementById('input-link');
const imgRemove = document.getElementById('img-remove');
const button = document.getElementById('btn');
let buttonDisplay = document.getElementById('btn').value;

// To alter button, show image remove and alter value input

button.addEventListener('click', function() {
    if(inputLink.value) {   
        buttonDisplay = 1;
        button.innerHTML = 'COPIAR';
        button.classList.add('btn-copy');
        imgRemove.classList.add('img-display img');
    }
});

// Clean alterations

imgRemove.addEventListener('click', function() {
    if(inputLink.value) {
        button.innerHTML = 'ENCURTAR';
        button.classList.remove('btn-copy');
        imgRemove.classList.add('input-img img');
    }
});



// Copy text second click from input 

button.addEventListener('click', function() {
    if(buttonDisplay == 2) {
        inputLink.select();
        document.execCommand('copy');
        button.classList.remove("btn_copy");
    }
});



