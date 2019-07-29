var esperandoCopia = false;
/**
 * Procedimento que recebe um input do tipo $(), pega seu valor e deixa em copia (ctrl+c) disponível para colagem
 * @param {*} input 
 */
var colocarEmCopia = (input) => {
    input.select();
    document.execCommand("copy");
}
/**
 * Ajusta a altura do background da class .back-image de acordo com o tamanho da tela
 */
var ajustarAlturaBack = () => {
    $(".back-image").css("height", (window.innerHeight)+"px");
}
/**
 * Procedimento para realizar a animação de encurtar link. 
 * partindo do inicio, para mostrar o link encurtador;
 * até o final, apagando os dados e retornando para o estado inicial
 * @param {int} time 
 * @param {boolean} inicio 
 */
var controleAnimacaoEncurtarLink = (time, inicio = true) => {
    if(inicio){
        if($("#txt-url").val() != ""){
            $("#txt-url").fadeOut(time, () =>{
                $("#txt-url").addClass("resultado");
                $("#txt-url").val(link);
            });
            $("#btn-url > samp").fadeOut(time, () =>{
                $("#btn-url > samp").html("COPIAR");
                $("#cancelar").fadeIn(time);
            });
            
            $("#txt-url").fadeIn(time);
            $("#btn-url > samp").fadeIn(time, () =>{
                esperandoCopia = true;
            });        
        }
    }
    else{
        $("#cancelar").fadeOut(time);
        $("#txt-url").fadeOut(time, () =>{
            $("#txt-url").removeClass("resultado");
            $("#txt-url").val("");
        });
        $("#btn-url > samp").fadeOut(time, () =>{
            $("#btn-url > samp").html("ENCURTAR");            
        });
        
        $("#txt-url").fadeIn(time);
        $("#btn-url > samp").fadeIn(time, () =>{
            esperandoCopia = false;
        });    
        
    }
}
/**
 * Recebe um contéudo DOM, apartir dele é detectado seu pai e por fim feita a centralização vertical do filho.
 * @param {*} conteudo 
 */
var centralizarVerticalmenteConteudoNoPai = (conteudo) => {
    let alturaPai = parseInt(conteudo.parent().css("height"));
    let alturaConteudo = parseInt(conteudo.css("height"));
    let alturaSobressalenteSuperior = (alturaPai - alturaConteudo)/2;

    conteudo.parent().css("padding", alturaSobressalenteSuperior+"px 0 "+alturaSobressalenteSuperior+"px 0")
}


$(document).ready(() => {
    ajustarAlturaBack();
    centralizarVerticalmenteConteudoNoPai($("#encurtar"));

    $("#cancelar").fadeOut(1);
});

$(window).resize(() => {
    ajustarAlturaBack();
    centralizarVerticalmenteConteudoNoPai($("#encurtar"));

});

$("#btn-url").click(() => {
    if(!esperandoCopia){
        controleAnimacaoEncurtarLink(500);
        
    }
    else{
        colocarEmCopia($("#txt-url"));
    }        
});

$("#cancelar").click(()=>{
    controleAnimacaoEncurtarLink(500, false);
});

