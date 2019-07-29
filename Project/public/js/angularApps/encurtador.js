var link;

angular.module('encurtadorApp', []).controller('encurtadorController', function($http) {
    var encurtador = this;
    let esperandoCopia = false;
    encurtador.todos = [];
    encurtador.contagem = [];
    /**
     * É feita a requisição na API /dados/encurtar para realizar o encurtamento do link
     */
    encurtador.encurtar = function() {
        if(!esperandoCopia && encurtador.url != null){
            $http({
                method : "POST",
                url : "/dados/encurtar",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: { url: encurtador.url }
            }).then(function sucesso(response) {

                link = response.data.shortUrl;
                esperandoCopia = true;
                encurtador.top5();
                encurtador.hitsTotais();
            }, function erro(response) {
                console.log("Não foi possivel acessar o service");
            });
        }
        
    };
    /**
     * Zera as informações em relação ao link, e se ainda está esperando efetuar a copia
     */
    encurtador.cancelar = function(){
        link = "";
        esperandoCopia = false;
    }
    /**
     * É feita a requisição na API /dados/top5 para mostrar os dados dos links que estão entre os 5 mais encurtados
     */
    encurtador.top5 = function() {
        $http({
            method : "GET",
            url : "/dados/top5"
        }).then(function sucesso(response) {
            encurtador.todos = response.data;
        }, function erro(response) {
            console.log("Não foi possivel acessar o service");
        });
    };
    /**
     * É feita a requisição na API /dados/hitsTotais para mostrar a quantidade de vezes que todos os links juntos
     * foram encurtados
     */
    encurtador.hitsTotais = function() {
        $http({
            method : "GET",
            url : "/dados/hitsTotais"
        }).then(function sucesso(response) {     
            var nvalue = Number(response.data.hitsTotais).toLocaleString('pt-BR');            
            encurtador.contagem = nvalue;
        }, function erro(response) {
            console.log("Não foi possivel acessar o service");
        });
    };
});