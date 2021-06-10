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

//Changes input and button text and actions for the received action
export function changeForm(action)
{
    let txtLink = document.querySelector('#txt-link');
    let btnLink = document.querySelector('#btn-link');
    if(action === "shorten")
    {
        txtLink.placeholder = "Cole o seu link aqui";
        txtLink.value = "";
        btnLink.innerText = "ENCURTAR";
        btnLink.dataset.action = "shorten";
    }
    else if(action === "copy")
    {
        txtLink.placeholder = "";
        btnLink.innerText = "COPIAR";
        btnLink.dataset.action = "copy";
    }
}

//Gets a link, then returns the shortened version
function shortenLink()
{
    let link = document.querySelector('#txt-link');
    if(validateURL(link.value))
    {
        link.value = makeShortLink(link.value);
        changeForm("copy");
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