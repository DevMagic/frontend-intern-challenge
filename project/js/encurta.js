var link = $("#txt_url");
var botao_encurtar = $("#btn_encurtar");
var botao_remover = $("#btn_remover");

botao_encurtar.on("click", troca_link);
botao_remover.on("click", limpa_form);

function encurta_link(tamanho)
{
    var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var aleatorio = '';
    for (var i = 0; i < tamanho; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        aleatorio += letras.substring(rnum, rnum + 1);
    }
    return aleatorio;
}

function troca_link() {
    if($(this).text() == "ENCURTAR" && link.val() != "") {
        url = `http://chr.dc/${encurta_link(5)}`;

        link.fadeOut(function() {
          link.removeClass("link_laranja");
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

function limpa_form() {
    link.fadeOut(function() {
      link.removeClass("link_branco");
      link.addClass("link_laranja");
      link.val('').fadeIn();
    });
  
    botao_encurtar.children("span").fadeOut(function() {
      $(this).text("ENCURTAR").fadeIn();
    });
  
    botao_remover.removeClass("visivel");
    botao_remover.addClass("invisivel");
  }

