define({ "api": [
  {
    "type": "get",
    "url": "dados/hitsTotais",
    "title": "HitsTotais",
    "description": "<p>Procedimento para mostrar a quantidade total de vezes que todos os links/urls foram encurtados</p>",
    "group": "Dados",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "hitsTotais",
            "description": "<p>Recebimento do total de vezes que foi encurtado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"hitsTotais\":500\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/dadosRoute.js",
    "groupTitle": "Dados",
    "name": "GetDadosHitstotais"
  },
  {
    "type": "get",
    "url": "dados/top5",
    "title": "Top5",
    "description": "<p>Procedimento para mostrar todas as informações dos links/url que estão no TOP 5 de mais encurtados</p>",
    "group": "Dados",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Código de identificação</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "hits",
            "description": "<p>Quantidade de vezes que o url/link foi encurtado</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Url/link original</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shortUrl",
            "description": "<p>Url/link encurtada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  [\n      {\n          \"id\":\"23094\",\n          \"hits\":1003,\n          \"url\":\"http://globo.com\",\n          \"shortUrl\":\"http://chr.dc/9dtr4\"\n      },\n\n      {\n          \"id\":\"23094\",\n          \"hits\":1003,\n          \"url\":\"http://globo.com\",\n          \"shortUrl\":\"http://chr.dc/9dtr4\"\n      },\n      {\n          \"id\":\"23094\",\n          \"hits\":1003,\n          \"url\":\"http://globo.com\",\n          \"shortUrl\":\"http://chr.dc/9dtr4\"\n      },\n      {\n          \"id\":\"23094\",\n          \"hits\":1003,\n          \"url\":\"http://globo.com\",\n          \"shortUrl\":\"http://chr.dc/9dtr4\"\n      },\n      {\n          \"id\":\"23094\",\n          \"hits\":1003,\n          \"url\":\"http://globo.com\",\n          \"shortUrl\":\"http://chr.dc/9dtr4\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/dadosRoute.js",
    "groupTitle": "Dados",
    "name": "GetDadosTop5"
  },
  {
    "type": "post",
    "url": "dados/encurtar",
    "title": "Encurtar",
    "description": "<p>Procedimento para encurtar uma url/link</p>",
    "group": "Dados",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "res.body.url",
            "description": "<p>Url para ser encurtada.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Código de identificação</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "hits",
            "description": "<p>Quantidade de vezes que o url/link foi encurtado</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Url/link original</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shortUrl",
            "description": "<p>Url/link encurtada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  {\n     \"id\":\"23094\",\n     \"hits\":1,\n     \"url\":\"http://globo.com\",\n     \"shortUrl\":\"http://chr.dc/9dtr4\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/dadosRoute.js",
    "groupTitle": "Dados",
    "name": "PostDadosEncurtar"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Index",
    "group": "Pagina",
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Pagina",
    "name": "Get"
  }
] });
