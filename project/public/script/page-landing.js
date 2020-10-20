const inputLink = document.getElementById('input-link');
const imgRemove = document.getElementById('img-remove');
const button = document.getElementById('btn');

// To alter button, show image remove and alter value input

button.addEventListener('click', function() {
    if (button.innerHTML == 'ENCURTAR') {
        setNameButton('COPIAR')
        updateInputValue('http://chd.dc/xyzxyz')
    } else {
        copyInput()
    }

    showCloseImg()
});

// Clean alterations

imgRemove.addEventListener('click', function() {
    if(inputLink.value) {
        setNameButton('ENCURTAR')
        updateInputValue()
        hideCloseImg()
    }
});

// update input value
function updateInputValue(value = '') {
    inputLink.value = value;
    inputLink.classList.add('alter-weight');
}

// set name button
function setNameButton(label) {
    button.innerHTML = label;
}

// show close image
function showCloseImg() {
    imgRemove.classList.add('img-display');
}

// hide close image
function hideCloseImg() {
    imgRemove.classList.remove('img-display');
    inputLink.classList.remove('alter-weight');
}

// copy input value
function copyInput() {
    inputLink.select();
    document.execCommand('copy');
}



