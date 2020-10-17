$(document).ready(function(){

    let urls = "https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/urls.json";

    $.getJSON(urls, function(element){
        element.sort(function(a,b){
            return parseInt(b.hits) - parseInt(a.hits);
        });
        console.log(element);

        for (let i = 0; i < 5; i++) {
            var newElement = document.createElement("div");

            $(newElement).addClass("container");

            if (i != 4) {
                $(newElement).addClass("line-1");
            }
            else {
                $(newElement).addClass("line-2");
            }
            
            var divShortUrls = document.createElement("div");
            var divHits = document.createElement("div");
            
            $(divShortUrls).attr('class', 'top-urls');
            $(divShortUrls).text(element[i].shortUrl);

            $(divHits).attr('class', 'top-hits');
            $(divHits).text(element[i].hits);

            document.querySelector(".top-5").append(newElement);
            $(divShortUrls).appendTo(newElement);
            $(divHits).appendTo(newElement);
        }

        /* IMPLEMENTA O NUMERO TOTAL DE HITS*/

        var k = 0;

        for (var i = 0; i < element.length; i++) {
            k += element[i].hits;
        }

        $(".num-hits").text(k);

    });

});

/* BOTAO ENCURTAR */

var link = $("#input-link");
var btn_encurtar = $("#btn-encurtar");
var btn_limpar = $("#btn-limpar");

btn_encurtar.on("click", change_link);
btn_limpar.on("click", limpar);

function random_link(size)
{
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var random = '';

    for (var i = 0; i < size; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        random += chars.substring(rnum, rnum + 1);
    }
    
    return random;
}

function change_link() {
  if($(this).text() == "ENCURTAR" && link.val() != "") {
    url = "http://chr.dc/" + random_link(5);

    link.fadeOut(function() {
      link.val(url).fadeIn();
    });
  
    btn_limpar.removeClass("hidden");
    btn_limpar.addClass("visible");

    $(this).children("span").fadeOut(function() {
      $(this).text("COPIAR").fadeIn();
    });

    btn_limpar.fadeIn();
  }
  else {
    link.select();
    document.execCommand('copy');
  }
}

function limpar() {
  link.fadeOut(function() {
    link.val('').fadeIn();
  });

  btn_encurtar.children("span").fadeOut(function() {
    $(this).text("ENCURTAR").fadeIn();
  });

  btn_limpar.removeClass("visible");
  btn_limpar.addClass("hidden");
}








