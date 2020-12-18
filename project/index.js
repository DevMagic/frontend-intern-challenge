let arrayTop5 = []

$.getJSON("../Assets/urls.json", function(data){
    
    let outroNumero = []
    let contador = 0
    let objetoMaior = []

    while(arrayTop5.length < 5) {

        let maior = -Infinity

        data.forEach((url) => {
            
            if( (url.hits > maior) && (verificaMaiorComNumerosAnteriores(outroNumero, url.hits))) {
                objetoMaior = url
                maior = objetoMaior.hits
            }

        })

        arrayTop5.push(objetoMaior)
        outroNumero.push(arrayTop5[contador].hits)
        contador ++

    }

    exibirTop5Html(arrayTop5)
    
    exibirTotalHitsHtml(calcularTotalHits(data))

    
}) 

const verificaMaiorComNumerosAnteriores = (array, numeroComparador) => {
    let contador = 0
    array.forEach((numero) => {
        if(numero !== numeroComparador) {
            contador += 1
        }
    })

    if(contador === array.length){
        return true
    }
}

const exibirTop5Html = (array) => {
    const divRankingTop5 = document.getElementById("ranking-top5")

    array.forEach((url, index) => {
        divRankingTop5.innerHTML += `<div class="items-top5"></div>`
        const divItemsTop5 = document.getElementsByClassName("items-top5") 

        divItemsTop5[index].innerHTML += `<h5>${url.shortUrl}</h5>`
        divItemsTop5[index].innerHTML += `<p>${url.hits}</p>`
        
    })
}

let totalHits = 0
const calcularTotalHits = (arrayUrls) => {
    arrayUrls.forEach((url) => {
        totalHits += url.hits
    })
    return totalHits
}

const exibirTotalHitsHtml = (numeroTotal) => {
    const campoTotalCliques = document.getElementById("total-cliques")

    campoTotalCliques.innerHTML  = numeroTotal
}

/* ====== FUNÇÃO DO BOTÃO ENCURTAR LINKS:  ====== */ 
const inputLink = document.getElementById("link-url")
const botaoEncurtarLink = document.getElementById("botao-encurtar")

function encurtarLink(){
    $.getJSON("../Assets/urls.json", function(data) {
      
        if(botaoEncurtarLink.innerHTML === "ENCURTAR") {
            if(inputLink.value !== "") {
                data.forEach((link) => {
                    if(link.url === inputLink.value) {
                        inputLink.value = link.shortUrl 
                        botaoEncurtarLink.innerHTML = "COPIAR"
    
                    } 
                })
            }else {
                alert("Por favor preencha o campo Link !")
                inputLink.focus
            }
        }

        if(botaoEncurtarLink.innerHTML === "COPIAR") {
            inputLink.select()
            document.execCommand('copy');

            setTimeout(function(){
                inputLink.value = ""
                botaoEncurtarLink.innerHTML = "ENCURTAR"
            }, 10000)
            

        }
        
    });
}