  $.ajax({
    type : 'GET',
    dataType : 'json',
    url: './data/urls.json',
    success : function(data)
    {
        const database =  data.sort(compare);
        linkHit(database);
        ContagemHits(database);
        $("#btn").click((e)=>{
            e.preventDefault();
            encurtarLink(database);
        });
        
    } 
});

