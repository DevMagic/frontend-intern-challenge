$(document).ready(function(){
    var url = "https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/urls.json";
    $.getJSON(url, function(data){
        var contador = 0;

        for (var i = 0; i < data.length; i++) {
            contador += data[i].hits;
        }

        $(".total_hits").text(contador);
    });
});