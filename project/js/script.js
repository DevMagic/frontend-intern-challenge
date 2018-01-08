$(main);
function main(){
     $('#shorten-url').click(function(evt) {
 		evt.preventDefault();
 		if($('#long-url').length === 0 || $('#long-url').val() === '') {
 			alert('Você precisa entrar com um URL.');
		} else {
		    var link = ($("#long-url").val());
		    $.ajax({
		        type:"POST",
		        url: 'https://www.googleapis.com/urlshortener/v1/url?fields=id&key=AIzaSyA4m1GsaU952I1QPFmmQcFh2CQ8N7XeRTc',
		        longUrl: link,
		        data:JSON.stringify({longUrl:link}),
		        contentType:"application/json",
		        success: function(data){
		            var encurtado = data.id;
		            $("#long-url").val(encurtado).css('color','#fff');
		            pegarInformacoes(encurtado);
		            
		        }
			});
		}
    });
}


function pegarInformacoes(data){
	$.ajax({
    	type:"GET",
    	url: 'https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyA4m1GsaU952I1QPFmmQcFh2CQ8N7XeRTc&shortUrl=' + data +'&projection=ANALYTICS_CLICKS',
		contentType:"application/json",
    	success: function(info){
			let dart = info.analytics.allTime.shortUrlClicks;
	    	//ADICIONA NA TELA O ULTIMO RESULTADO
	    	$("#shortenedURL").html(data + " <br> " + dart);
	    	// =========================== TOP 5 ==============================
	    	//Vetor com as shortUrls
			let shortUrls = [].map.call($("#ulTop li"),function(li){
			   	return $(li).find("a").html();
	        });
	        
	        if($.inArray(data, shortUrls) != -1 ){
	        	// Finaliza a funcao
	        	return true;
	        }
	    	
	    	//Lista de clicks
        	let clicksList = [].map.call($("#ulTop li"),function(li){
            	return parseInt($(li).find("span").html());
            });
            //Existem 5 na lista ?
			if(clicksList.length < 5){
				//Adiciona
				$("#ulTop").append("<li><a href=" + data + ">"+ data +"</a><span class='dart'>"+dart+"</span></li>");
			}else{
				if( parseInt($("#ulTop li").last().find("span").html()) > dart ){
					//Nao adiciona no TOP 5
				}else{
					//Remove o ultimo
					$("#ulTop li").last().remove();
					//Adiciona
					$("#ulTop").append("<li><a href=" + data + ">"+ data +"</a><span class='dart'>"+dart+"</span></li>");
				}
			}
	    	//EXECUTA O SORT e a soma de clicks
	    	sortUrls();
	    	somarClicks();
    	}
    });
}

function sortUrls(){
	let sorted = $('#ulTop li').sort(function (a, b) {
	    let contentA = parseInt($(a).find("span").html());
	    let contentB = parseInt($(b).find("span").html());
	    return (contentA > contentB) ? -1 : (contentA < contentB) ? 1 : 0;
	});
	$('#ulTop').html("");
	$('#ulTop').append(sorted);
}

function somarClicks(){
	let total = [].reduce.call($("#ulTop li"),function(ant, atu){
		return ant + parseInt($(atu).find(".dart").html());
	},0);
	$("#counter").html(total);
}