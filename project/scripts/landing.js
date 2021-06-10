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
function changeForm(action)
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
function verifyButtonAction()
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

//Prevents form from submiting
document.querySelector('#shorten-form').addEventListener("submit", ev => {ev.preventDefault()});

//Verifies button condition on clicking
document.querySelector('#btn-link').addEventListener("click", verifyButtonAction);

//Add the top 5 urls to the page
function listTopFive(tops)
{
    let list = document.querySelector('.top-link-list');
    list.innerHTML = "";
    for(let top of tops)
    {
        list.innerHTML += `
            <div>
                <p><a href="${top.url}">${top.shortUrl}</a></p>
                <p>${top.hits}</p>
            </div>
        `;
    }
}

//Selects the top 5 urls by hits
function fillTopFive(allURLs)
{
    let top = [];
    let qtTop = 0;
    while(qtTop < 5 && allURLs.length >= 5)
    {
        for(let url of allURLs)
        {
            if(url === allURLs[0])
            {
                top.push(url);
            }
            else
            {
                if(url.hits > top[qtTop].hits)
                {
                    top[qtTop] = url;
                }
            }
        }
        allURLs.splice(allURLs.lastIndexOf(top[qtTop]), 1);
        qtTop++;
    }
    //console.log(top);
    listTopFive(top);
}

//Fetches url array
function fetchUrls()
{
    fetch('../../Assets/urls.json')
        .then(resp => {return resp.json()})
        .then(data => {fillTopFive(data)});
}

//Functions activated on page loading
window.addEventListener("load", function(){
    changeForm("shorten");
    fetchUrls();
});
