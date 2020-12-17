"use strict";

var encurtar = {
  getTopUrls: function getTopUrls(func) {
    $.getJSON("assets/urls.json", function (obj) {
      var links = {
        1: {
          "hits": 0,
          "url": ""
        },
        2: {
          "hits": 0,
          "url": ""
        },
        3: {
          "hits": 0,
          "url": ""
        },
        4: {
          "hits": 0,
          "url": ""
        },
        5: {
          "hits": 0,
          "url": ""
        }
      };
      obj.map(function (link) {
        for (var index = 1; index <= 6; index++) {
          if (index == 6) {
            if (links[index - 2]['hits'] == links[index - 1]['hits']) {
              links[index - 1]['hits'] = link.hits;
              links[index - 1]['url'] = link.shortUrl;
            }
          } else {
            if (link.hits > links[index]['hits']) {
              for (var index1 = index + 1; index1 <= 5; index1++) {
                links[index1]['hits'] = links[index1 - 1]['hits'];
                links[index1]['url'] = links[index1 - 1]['url'];
              }

              links[index]['hits'] = link.hits;
              links[index]['url'] = link.shortUrl;
              break;
            }
          }
        }
      });
      func(links);
    });
  },
  getTotalHits: function getTotalHits(func) {
    $.getJSON("assets/urls.json", function (obj) {
      var total = 0;
      obj.map(function (link) {
        total = total + parseInt(link.hits);
      });
      func(total);
    });
  },
  gerarLink: function gerarLink(baseUrl, url, func) {
    if (url.length > 0) {
      var ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("www.");

      if (ok) {
        var _url = baseUrl + "/" + Math.random().toString(36).substr(2, 3) + Math.random().toString(36).substr(2, 2);

        func(_url);
      } else {
        modal.error('A URL informada é invalida!', 'Erro');
      }
    } else {
      modal.error('O Campo de URL está vazio', 'Erro');
    }
  },
  iniciar: function iniciar() {
    encurtar.getTopUrls(function (top) {
      for (var index = 1; index <= 5; index++) {
        console.log(top[index].url);
        $('.top ul').append("<li>\n                    <span>".concat(top[index].url, "</span>\n                    <span>").concat(top[index].hits, "</span>\n                </li>"));
      }
    });
    encurtar.getTotalHits(function (total) {
      $('span.total-hits').text(total);
    });
    $('.short button').click(function () {
      if ($('#encurtar').is(':visible')) {
        encurtar.gerarLink("http://chr.dc", $('#short_inp').val(), function (url) {
          $('#short_inp').val(url);

          if ($('#encurtar').is(':visible')) {
            $("#encurtar").fadeOut(300);
            setTimeout(function () {
              $("#copiar").fadeIn(300);
            }, 300);
          }
        });
      } else {
        $('#short_inp').select();
        document.execCommand('copy');
        modal.success("Seu link foi copiado para área de transferência!", "Sucesso");
      }
    });
    $('#short_inp').keyup(function () {
      if ($('#copiar').is(':visible')) {
        $("#copiar").fadeOut(300);
        setTimeout(function () {
          $("#encurtar").fadeIn(300);
        }, 300);
      }
    });
    $('.loader-area').fadeOut(600);
  }
};
encurtar.iniciar();