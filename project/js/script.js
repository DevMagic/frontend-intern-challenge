function getDados(){
    return [{
        "id": "23094",
        "hits": 1003,
        "url": "http://globo.com",
        "shortUrl": "http://chr.dc/9dtr4"
    },
    {
        "id": "76291",
        "hits": 1922,
        "url": "http://google.com",
        "shortUrl": "http://chr.dc/aUx71"
    },
    {
        "id": "66761",
        "hits": 765,
        "url": "http://terra.com.br",
        "shortUrl": "http://chr.dc/u9jh3"
    },
    {
        "id": "70001",
        "hits": 1519,
        "url": "http://facebook.com",
        "shortUrl": "http://chr.dc/qy61p"
    },
    {
        "id": "21220",
        "hits": 311,
        "url": "http://diariocatarinense.com.br",
        "shortUrl": "http://chr.dc/87itr"
    },
    {
        "id": "10743",
        "hits": 722,
        "url": "http://uol.com.br",
        "shortUrl": "http://chr.dc/y81xc"
    },
    {
        "id": "19122",
        "hits": 1320,
        "url": "http://chaordic.com.br",
        "shortUrl": "http://chr.dc/qy5k9"
    },
    {
        "id": "55324",
        "hits": 997,
        "url": "http://youtube.com",
        "shortUrl": "http://chr.dc/1w5tg"
    },
    {
        "id": "70931",
        "hits": 487,
        "url": "http://twitter.com",
        "shortUrl": "http://chr.dc/7tmv1"
    },
    {
        "id": "87112",
        "hits": 130,
        "url": "http://bing.com",
        "shortUrl": "http://chr.dc/9opw2"
    }];
}

function bubleSort(dados){
    for (let index = 0; index < dados.length; index++) {
        for (let i = 0; i < dados.length; i++) {
            
            if(dados[index].hits > dados[i].hits){
                let aux = dados[index];
                dados[index] = dados[i];
                dados[i] = aux;
            }
        
        }
        
    }
    return dados;
}

function construirTabela(){
    let tabela = document.querySelector('#tabela-top-top');

    let ordenados = bubleSort(getDados());

    for(let i = 0; i < 5;i++){
        let tr = document.createElement('tr');
        let td_link = document.createElement('td');
            let a = document.createElement('a');
            a.setAttribute('href',ordenados[i].shortUrl);
            a.setAttribute('style','color:#AA1423;font-weight: bold;');
            a.innerHTML = ordenados[i].shortUrl;
            td_link.appendChild(a);
            td_link.setAttribute('style','border-bottom: 1px solid #EEE; padding-bottom:8px;padding-top:10px;')

        
        let td_numero = document.createElement('td');
            td_numero.innerHTML = ordenados[i].hits;
            td_numero.setAttribute('style','border-bottom: 1px solid #EEE;margin-bottom:5px;text-align:right')
        
        tr.appendChild(td_link);
        tr.appendChild(td_numero);
        tabela.appendChild(tr);
    }
}

let btn = document.querySelector('#btn_pesquisar');

btn.onclick = function(){
    let link = document.querySelector('#input_txt');
    let dados = getDados();

    for (let index = 0; index < dados.length; index++) {
        if(dados[index].url == link.value){
            
            link.value = dados[index].shortUrl;

            let btn_pesquisar = document.querySelector('#btn_pesquisar');
            btn_pesquisar.setAttribute('data-clipboard-target','#input_txt');
            btn_pesquisar.textContent = "COPY";
            
            let ico = document.createElement('span');
            ico.setAttribute('class','glyphicon glyphicon-paperclip');
            btn.setAttribute('arial-label','Left Align');
            btn_pesquisar.appendChild(ico);
        }
        
    }

}

// chamando funções

construirTabela();

new ClipboardJS('.btn');