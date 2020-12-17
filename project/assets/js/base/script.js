const encurtar = {
    getTopUrls: function (func) {
        $.getJSON("assets/urls.json", function (obj) {
            const links = {
                1: {
                    "hits": 0,
                    "url": ""
                }, 2: {
                    "hits": 0,
                    "url": ""
                }, 3: {
                    "hits": 0,
                    "url": ""
                }, 4: {
                    "hits": 0,
                    "url": ""
                }, 5: {
                    "hits": 0,
                    "url": ""
                }
            };
            obj.map(link => {
                for (let index = 1; index <= 6; index++) {
                    if (index == 6) {
                        if (links[(index - 2)]['hits'] == links[(index - 1)]['hits']) {
                            links[index - 1]['hits'] = link.hits;
                            links[index - 1]['url'] = link.shortUrl;
                        }
                    } else {
                        if (link.hits > links[index]['hits']) {
                            for (let index1 = (index + 1); index1 <= 5; index1++) {
                                links[index1]['hits'] = links[(index1 - 1)]['hits'];
                                links[index1]['url'] = links[(index1 - 1)]['url'];
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
    getTotalHits: function (func) {
        $.getJSON("assets/urls.json", function (obj) {
            var total = 0;
            obj.map(link => {
                total = total + parseInt(link.hits);
            });
            func(total);
        });
    },
    gerarLink: function (baseUrl, url, func) {
        if (url.length > 0) {
            const ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("www.");
            if (ok) {
                const url = baseUrl + "/" + Math.random().toString(36).substr(2, 3) + Math.random().toString(36).substr(2, 2);
                func(url);
            } else {
                modal.error('A URL informada é invalida!', 'Erro')
            }
        } else {
            modal.error('O Campo de URL está vazio', 'Erro')
        }
    },
    iniciar: function () {
        encurtar.getTopUrls(function (top) {
            for (let index = 1; index <= 5; index++) {
                console.log(top[index].url);
                $('.top ul').append(`<li>
                    <span>${top[index].url}</span>
                    <span>${top[index].hits}</span>
                </li>`);
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
                        $(`#encurtar`).fadeOut(300);
                        setTimeout(function () {
                            $(`#copiar`).fadeIn(300);
                        }, 300);
                    }
                });
            } else {
                $('#short_inp').select();
                document.execCommand('copy');
                modal.success("Seu link foi copiado para área de transferência!", "Sucesso")
            }
        });

        $('#short_inp').keyup(function () {
            if ($('#copiar').is(':visible')) {
                $(`#copiar`).fadeOut(300);
                setTimeout(function () {
                    $(`#encurtar`).fadeIn(300);
                }, 300);
            }
        });

        $('.loader-area').fadeOut(600);
    }
};

encurtar.iniciar();