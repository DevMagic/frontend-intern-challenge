//Validates if a given string is a valid URL, demands full path
function validateURL(link) 
{
    let url;
    try {
      url = new URL(link);
    } catch (_) {
      return false;  
    }
  
    return (url.protocol === "http:" || url.protocol === "https:");
}

//Makes a shortened link, based on example's structure
function makeShortLink(link)
{
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    link = "http://chr.dc/";
    for(let x = 0; x < 6; x++)
    {
        link += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return link;
}

//Adds animation to the form
function animateFade()
{
    let formItems = document.querySelectorAll('.shortener-form input, .shortener-form button');
    removeFade();
    for(let item of formItems)
    {
        //#btn-cancel receives partial fading, other receive total fading
        item.classList.add(item.id == "btn-cancel" ? "animate-fade-partial" : "animate-fade-total");
    }
}

//Removes animation from the form
function removeFade()
{
    let formItems = document.querySelectorAll('.shortener-form input, .shortener-form button');
    for(let item of formItems)
    {
        item.className = '';
    }
}

//Changes input and button text and actions for the received action
export function changeForm(action)
{
    let txtLink = document.querySelector('#txt-link');
    let btnLink = document.querySelector('#btn-link');
    let btnCancel = document.querySelector('#btn-cancel');    
    if(action === "shorten")
    {
        txtLink.placeholder = "Cole o seu link aqui";
        txtLink.value = "";
        btnCancel.style.display = "none";
        btnLink.innerText = "ENCURTAR";
        btnLink.dataset.action = "shorten";
    }
    else if(action === "copy")
    {
        txtLink.placeholder = "";
        btnLink.innerText = "COPIAR";
        btnLink.dataset.action = "copy";
        btnCancel.style.display = "initial";
        setTimeout(removeFade, 500);
    }
}

//Gets a link, then returns the shortened version
function shortenLink()
{
    let link = document.querySelector('#txt-link');
    if(validateURL(link.value))
    {
        animateFade();
        setTimeout(() => {
            link.value = makeShortLink(link.value);
            changeForm("copy");
        }, 500);
    }
    else
    {
        link.value = "";
        link.placeholder = "Insira um link válido e completo!";
    }
}

//Copies shortened link to the user's clipboard
function copyLink()
{
    let link = document.querySelector('#txt-link').value;
    navigator.clipboard.writeText(link)
        .then(changeForm("shorten"));
}

//Check if the button is ready for shorten or for copying
export function verifyButtonAction()
{
    let btnLink = document.querySelector('#btn-link');
    if(btnLink.dataset.action === "shorten")
    {
        shortenLink();
    }
    else if(btnLink.dataset.action === "copy")
    {
        copyLink();
    }
}