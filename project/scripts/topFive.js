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
export function fetchUrls()
{
    fetch('../../Assets/urls.json')
        .then(resp => {return resp.json()})
        .then(data => {fillTopFive(data)});
}
