$(document).ready(function(){
    const url = "https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/urls.json";
    let soma_hits = 0;
    $.getJSON(url, function(data){
        data.sort(function(a,b){
            return parseInt(b.hits) - parseInt(a.hits); // Ordenando em ordem decrescente
        });

        for (var i = 0; i < 5; i++) {
            var nova_div = document.createElement("div");
            soma_hits += data[i].hits; // Somador de hits
            $(nova_div).addClass("container");

            // Descobre se é a ultima linha
            i != 4 ? $(nova_div).addClass("nova_linha_com_borda") : $(nova_div).addClass("nova_linha_sem_borda");
            
            var p_short_url = document.createElement("p");
            var p_hits = document.createElement("p");
            
            $(p_short_url).attr('id', 'top_5_url');
            $(p_short_url).text(data[i].shortUrl);

            $(p_hits).attr('id', 'top_5_hits');
            $(p_hits).text(data[i].hits);

            document.querySelector("#top_5_hits").append(nova_div);
            $(p_short_url).appendTo(nova_div);
            $(p_hits).appendTo(nova_div);
        }

        // Soma total dos hits
        document.querySelector("#hits").innerHTML = soma_hits;
    });
});
