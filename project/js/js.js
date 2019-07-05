$( "#btn-encurtar" ).click(function(){

	if ($(this).val() == "ENCURTAR") {	
		var linkOriginal = $("#cole-link").val; /*GUARDA LINK ORIGINAL [CRIAR AÇÃO]*/ 

		var linkEncurtado = "http/chr.dc/xyzxyz"; /*GERA LINK ENCURTADO [RECEBER DE UM "GERADOR DE LINKS"]*/ 

		$("#cole-link").val(linkEncurtado);
		$(this).val("COPIAR");
		$("#cole-link").css("color", "#fff");
		$("#btn-limpar").css("visibility", "visible");
	 }

	 else if ($(this).val() == "COPIAR"){
		/* Seleciona o input com o link encurtado */		
		$("#cole-link").select();
		/* copia o link na area de tranferencia */		
		var linkCopiado = document.execCommand('copy');
		alert('O Link encurtado foi copiado')
	} else{

	 }
});	

$("#btn-limpar").click(function(){
	$("#cole-link").val("");
	$("#cole-link").css("color", "var(--home-primary-color)");
	$("#btn-encurtar").val("ENCURTAR");
	$("#btn-limpar").css("visibility", "hidden");
});


	
/*  ----------------- INTERAÇÃO COM JS PURO ------------------------
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
*/


