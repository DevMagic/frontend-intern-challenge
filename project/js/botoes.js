var link = $("#input_url");
var botao_encurtar = $("#botao_encurtar");
var botao_remover = $("#botao_remover");

botao_encurtar.on("click", troca_link);
botao_remover.on("click", reseta_form);

function texto_aleatorio(tamanho)
{
    var letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var aleatorio = '';
    for (var i = 0; i < tamanho; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        aleatorio += letras.substring(rnum, rnum + 1);
    }
    return aleatorio;
}

function troca_link() {
  if($(this).text() == "ENCURTAR" && link.val() != "") {
    url = "http://chr.dc/" + texto_aleatorio(5);

    link.fadeOut(function() {
      link.removeClass("link_normal");
      link.addClass("link_branco");
      link.val(url).fadeIn();
    });
  
    botao_remover.removeClass("invisivel");
    botao_remover.addClass("visivel");

    $(this).children("span").fadeOut(function() {
      $(this).text("COPIAR").fadeIn();
    });

    botao_remover.fadeIn();
  }
  else {
    link.select();
    document.execCommand('copy');
  }
}

function reseta_form() {
  link.fadeOut(function() {
    link.removeClass("link_branco");
    link.addClass("link_normal");
    link.val('').fadeIn();
  });

  botao_encurtar.children("span").fadeOut(function() {
    $(this).text("ENCURTAR").fadeIn();
  });

  botao_remover.removeClass("visivel");
  botao_remover.addClass("invisivel");
}