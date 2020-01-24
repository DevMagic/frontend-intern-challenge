$(document).ready(function(){
    //TOP FIVE
    getTopFive();
        
    $('#btn-encurtar').click(function(){
        const longUrl = $('#link').val()
            
        if (longUrl !== '') {
            const newUrl = generateUrl(longUrl)
            
            $('#resultado input').val(newUrl)

            $('#resultado').removeClass('some')
            $('#resultado').addClass('mostra')
            
            $('#btn-copiar').removeClass('some')
            $('#btn-copiar').addClass('mostra')

            $('#link').removeClass('mostra')
            $('#link').addClass('some')

            $(this).removeClass('mostra')
            $(this).addClass('some')

            $('#link').val('')
        }

        return false  
    })

    $('#btn-copiar').click(function(){
        $('#resultado input').select();
        document.execCommand("copy");
        $temp.remove();
    })

    $('.fechar').click(function() {   
        $('#resultado').addClass('some')
        $('#resultado').removeClass('mostra')

        $('#link').removeClass('some')
        $('#link').addClass('mostra')

        $('#btn-encurtar').addClass('mostra')
        $('#btn-encurtar').removeClass('some')

        $('#btn-copiar').addClass('some')
        $('#btn-copiar').removeClass('mostra')

        $('#resultado span').text('')
    })
})