let source = "";
function gerarLink(){
    let link = document.getElementById('input-link').value;
        function texto_aleatorio(tamanho)
        {
            let letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
            let aleatorio = '';
            for (var i = 0; i < tamanho; i++) {
                let rnum = Math.floor(Math.random() * letras.length);
                aleatorio += letras.substring(rnum, rnum + 1);
            }

            let url = "http://chr.dc/";
            return url+aleatorio;
        }

        getFile('Desafio-DevMagic-master/datasource.json', function (data) {
       
        for (key in source) { // percorre o JSON
            if(source[key].url == link){
                source[key].hits = source[key].hits + 1;
                document.getElementById("table").innerHTML = '';
                source.sort(sortByProperty("hits"));
                topFive();
                return document.getElementById('input-link').value = source[key].shortUrl;
            }
            
        }

        jsonStr = JSON.stringify(teste.push({id: '15421', hits: 1, url: link, shortUrl: texto_aleatorio(6)}));
        return  document.getElementById('input-link').value = texto_aleatorio(6);
    })
}



function getFile(url, func) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', `/${url}`, true);

    xhttp.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            func(this.responseText);
        }
    }

    xhttp.send();
}

// executando a funcao
window.onload = getFile('project/datasource.json', function (data) {
    data_json = JSON.parse(data);
	source = data_json;
    
    source.sort(sortByProperty("hits"));
    topFive();

})

    function sortByProperty(property){  
        return function(a,b){  
        if(a[property] > b[property])  
            return -1;  
        else if(a[property] < b[property])  
            return 1;  

        return 0;  
    }  
}

function topFive(){
	contador = 0;
    for (k in source) {
        if(k < 5) {
        let lista  = document.getElementById("table").innerHTML;
        lista = lista +"<tr>";
        lista = lista +"<td>"+source[k].shortUrl+"</td>";
        lista = lista +"<td>"+source[k].hits+"</td>";
        lista = lista +"<tr>";
        
        document.getElementById("table").innerHTML = lista;

       }

       contador+=source[k].hits;
	   document.getElementById('contador').innerHTML = contador;
    }
}