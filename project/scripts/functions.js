
    function ordenar(a, b) {
        const totalA = a.hits
        const totalB = b.hits

        let comparacao = 0

        if (totalA < totalB) {
            comparacao = 1
        } else if (totalA > totalB) {
            comparacao = -1
        }

        return comparacao
    }

    function getrandom() {
        var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);

        return random_string
    }

    function generateUrl(longUrl) {
        const urlCode = getrandom()
        const shortUrl = 'http://ch.dc/' + urlCode

        return shortUrl
    }

    function getTopFive() {
        axios.get('urls.json')
            .then(function(response) {
                const urls = response.data.sort(ordenar)
                let totalHits = 0
                let linha = ''

                for(let i = 0; i <= (urls.length - 1); i++) {
                    totalHits = urls[i].hits + totalHits
                }
                
                for(let i = 0; i < 5; i++) {
                    linha += '<tr>'
                    linha += '<td align="left">'
                    linha += '<span class="link">' + urls[i].shortUrl + '</span>'
                    linha += '</td>'
                    linha += '<td align="right">'
                    linha += '<span class="hits">' + urls[i].hits + '</span>'
                    linha += '</td>'
                    linha += '</tr>'
                }

                $('#top-five table').html(linha)
            })
    }