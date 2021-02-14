function encurtar() {
  var valor = document.getElementById("inputEncurtar").value;
  $.getJSON( "https://is.gd/create.php?callback=?", {
    url: valor,
    format: "json"
}).done(function( data ) {
    let novolink = data.shorturl;
	console.log(novolink);
	if(novolink!==undefined)
	document.getElementById("inputEncurtar").value =
	 novolink;
	else document.getElementById("inputEncurtar").value = "";
});
}
