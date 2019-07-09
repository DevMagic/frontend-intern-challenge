$(document).ready(function(){
    var url = "https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/urls.json";

    $.getJSON(url, function(data){
        data.sort(function(a,b){
            return parseInt(b.hits) - parseInt(a.hits); //Ordenando em ordem decrescente e transformando a string em inteiro
        });
        console.log(data);

        for (var i = 0; i < 5; i++) {
            var novo = document.createElement("div");

            $(novo).addClass("container");

            if (i != 4) {
                $(novo).addClass("nova_linha");
            }
            else {
                $(novo).addClass("nova_linha_sem_borda");
            }
            
            var pShort = document.createElement("p");
            var pHits = document.createElement("p");
            
            $(pShort).attr('id', 'top_5_url');
            $(pShort).text(data[i].shortUrl);

            $(pHits).attr('id', 'top_5_hits');
            $(pHits).text(data[i].hits);

            document.querySelector("#top_5").append(novo);
            $(pShort).appendTo(novo);
            $(pHits).appendTo(novo);
        }
    });
});

