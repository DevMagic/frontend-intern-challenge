/**
 * Recebe por parâmetro um json, junto com o campo que deseja buscar
 * e a chave que será comparada em todo json
 * @param {JSON} json
 * @param {String} campo
 * @param {String} parametro
 * @return JSON do item encontrado
 */
var procurarItemNoJson = (json, campo, parametro) => {
    let item;    
    for(let i = 0; i < json.length; i++){
        if(json[i][campo] == parametro){
            item = json[i];
            break;
        }
    }
    return item;
}
/**
 * Recebe um Json e um File, grava no destino pré-estabelecido.
 * 
 * @param {JSON} json
 * @param {FileSystem(fs)} fs
 */
var atualizarUrls = (json, fs) =>{
    fs.writeFile("./model/urls.json", JSON.stringify(json), (err) =>{
        if(err){
            console.log(err);
        }
    });
}
/**
 * Procedimento para gerar um novo número de identificação
 * 
 * @return {String} Valor do ID
 */
var gerarId = () => {
    let id = "";
    for(let i = 0; i<5; i++){
        id += Math.round(Math.random() * 9);
    }
    return id;
}
/**
 * Procedimento para gerar um novo link/url para encurtamento
 * 
 * @return {String} Link/url nova
 */
var gerarLink = () => {
    let link = "";
    for(let i = 0; i<5; i++){
        //Numerico
        if(Math.round(Math.random() * 0) == 1){
            link += Math.round(Math.random() * 9);
        }
        //Alfabetico
        else{
            //Maiusculo
            if(Math.round(Math.random() * 0) == 1){
                
                link += String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65));
            }
            //Minisculo
            else{
                link += String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97));
            }            
        }    
    }
    return "http://chr.dc/"+link;
    
}
exports.top5 = (req, res, next) => {
    var fs = require("fs");
    /* Lê Json urls.json */
    fs.readFile("./model/urls.json" , "utf8", (err, data) => {
        let array = [];
        /* Verifica Se Tem erro */
        if(err){
            return console.log(err);
        }        
        var jsonData = JSON.parse(data); // faz o parse para json
        /* Ordena do maior para o menor em relação os HITS*/        
        let novo = jsonData.sort(function(a,b){
            if(a.hits == b.hits)
                return 0;
            if(a.hits < b.hits)
                return 1;
            if(a.hits > b.hits)
                return -1;
        });
        /* Selecione os 5 primeiros */
        for(let i = 0; i < 5; i++){
            array.push(novo[i]);            
        }
        /* Deixa pronto para consulta no formato json */
        res.json(array);
    });
    
};
exports.hitsTotais = (req, res, next) => {
    var fs = require("fs");
    
    /* Lê Json urls.json para verificar se o link já fora encurtado outra vez*/
    fs.readFile("./model/urls.json" , "utf8", (err, data) => {
        let hitsTotais = 0;
        /* Verifica Se Tem erro */
        if(err){
            return console.log(err);
        }        
        var jsonData = JSON.parse(data); // faz o parse para json
        for(let i = 0; i <jsonData.length; i++){
            hitsTotais += jsonData[i].hits;
        }
        return res.json({
            "hitsTotais":hitsTotais
        });
    });
}
exports.encurtar = (req, res, next) => {
    var url = req.body.url;
    var fs = require("fs");
    /* Lê Json urls.json para verificar se o link já fora encurtado outra vez*/
    fs.readFile("./model/urls.json" , "utf8", (err, data) => {
        let item;
        /* Verifica Se Tem erro */
        if(err){
            return console.log(err);
        }  
        var jsonData = JSON.parse(data); // faz o parse para json
        item = procurarItemNoJson(jsonData, "url" , url);
        /* Se encontrar, lançará para o res*/
        if(item != null){
            for(let i = 0; i <jsonData.length; i++){
                if(jsonData[i].id == item.id){
                    jsonData[i].hits = jsonData[i].hits + 1;
                    atualizarUrls(jsonData, fs);
                    break;
                }
            }
            return res.json(item)
        }
        else{
            let id;
            let link;
            let obj;
            do{ 
                id = gerarId();               
                item = procurarItemNoJson(jsonData, "id" , id);
            }
            while(item != null);
            /* Termina o laço quando encontrar um id que n foi registrado */
            do{ 
                link = gerarLink();               
                item = procurarItemNoJson(jsonData, "shortUrl" , link);
            }
            while(item != null);
            obj = {
                "id": id,
                "hits": 1,
                "url": url,
                "shortUrl": link
            }
            jsonData.push(obj);
            atualizarUrls(jsonData, fs);
            return res.json(obj);
        }
    });
}


