	function encurtarFn() {
	var linkEncurtado = "http/chr.dc/xyzxyz";
	var linkOriginal = document.getElementById("cole-link").value;
	document.getElementById("cole-link").value = linkEncurtado;
	document.getElementById("cole-link").style.color = "#fff"
	document.getElementById("btn-encurtar").value = "COPIAR";
	document.getElementById("btn-limpar").style.visibility = "visible"

	 }


	 function limparLink(){
	 		document.getElementById("cole-link").value = "";
	 		document.getElementById("cole-link").style.color = "var(--home-primary-color)";
	 		document.getElementById("btn-encurtar").value = "ENCURTAR";
			document.getElementById("btn-limpar").style.visibility = "hidden";


	 }
