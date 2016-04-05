// Classe para chamar o Json.
function json(){
	var qtd;
	var retorno;

	// Resgatar valores.
	json.prototype.resgatarValores = function(){
		$('#resultado').html('Carregando dados...');

		// Estrutura de resultado.
		$.getJSON('urls.json', function(data){
			this.qtd = data.links.length;
			this.retorno = '';
			for (i = 0; i < this.qtd; i++){
                this.retorno += '<table><tr>';
                this.retorno += '<td><b>' + data.links[i].shortUrl + '</b><td /> ';
				this.retorno += '<td> <p>' + data.links[i].hits + '</p><td/>';
                
			}
			$('#resultado').html(this.retorno);
		});

	}

}

// Objeto.
var obj = new json();
obj.resgatarValores();
