function compare(a,b) 
{
    if (a.hits > b.hits)
       return -1;
    if (a.hits < b.hits)
      return 1;
    return 0;
}

function linkHit(database){
    const shortUrl = document.querySelectorAll(".short-link");
    const hit = document.querySelectorAll(".hits");
    for(let i = 0;i<shortUrl.length;i++ )
    {
        shortUrl[i].innerHTML = database[i].shortUrl;
        hit[i].innerHTML = database[i].hits;
   
    }
} 

function ContagemHits(database)
{
    const contagemNum = document.querySelector("#contagemNum");
    contagemNum.innerHTML = database.reduce(( prev, atual ) => {
        return prev + atual.hits;
    }, 0 );
    
}


 
 
  $.ajax({
    type : 'GET',
    dataType : 'json',
    url: './data/urls.json',
    success : function(data)
    {
        const database =  data.sort(compare);
        console.log(database);
        linkHit(database);
        ContagemHits(database);
            
        
    } 
});

