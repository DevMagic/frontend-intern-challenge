const inputLink = document.getElementById('input-link');
const imgRemove = document.getElementById('img-remove');
const button = document.getElementById('btn');
let buttonDisplay = document.getElementById('btn').value;

// To alter button, show image remove and alter value input

button.addEventListener('click', function() {
    if(inputLink.value) {
        buttonDisplay = 1;
        button.innerHTML = 'COPIAR';
        inputLink.style.color = 'white';
        inputLink.style.fontWeight = 'bold';
        imgRemove.style.display = 'inline';
    }
});

// Clean alterations

imgRemove.addEventListener('click', function() {
    if(inputLink.value) {
        button.innerHTML = 'ENCURTAR';
        inputLink.style.color = '#ff6e14';
        inputLink.style.fontWeight = 'initial';
        imgRemove.style.display = 'none';
    }
});

// Copy text second click from input 

button.addEventListener('click', function() {
    if(buttonDisplay == 2) {
        inputLink.select();
        document.execCommand('copy');
    }
});



