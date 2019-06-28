function makerandom(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

$(document).ready(function () {
    const button = document.getElementById("btn_encurtar");
    const textbox = document.getElementById("input_field");
    const remove = document.getElementById("remove_link");
    const remove_vazio = document.getElementById("remove_link_vazio");
    const remover_btn = document.getElementById("icon_remover");
    $(remove).hide();

    button.onclick = function () {
        if (button.value == "ENCURTAR" && textbox.value != "") {
            button.value = "COPIAR";
            url = `http://chr.dc/${makerandom(6)}`;
            $(textbox).fadeOut("slow", function () {
                $(textbox).val(url);
                $(textbox).addClass("link_convertido");
                $(textbox).fadeIn("slow");
                $(remove_vazio).hide();
                $(remove).fadeIn("slow");
            });
        } else if (button.value == "COPIAR") {
            textbox.select();
            document.execCommand("copy");
        }

    };

    remover_btn.onclick = function () {
        $(textbox).val('');
        $(textbox).removeClass("link_convertido");
        $(remove).hide();
        $(remove_vazio).show();
        $(button).val('ENCURTAR');
    };

    textbox.addEventListener("change", function () {
        $(remove).hide();
        $(textbox).removeClass("link_convertido");
        $(remove_vazio).show();
        $(button).val('ENCURTAR');
    })
});