const express = require('express');
const router = express.Router();
const controller = require('../controllers/dadosController');

/**
 * @api {get} dados/top5 Top5
 * @apiDescription
 * Procedimento para mostrar todas as informações dos links/url que estão no TOP 5
 * de mais encurtados
 * @apiGroup Dados
 * 
 * @apiSuccess {String} id Código de identificação
 * @apiSuccess {int} hits Quantidade de vezes que o url/link foi encurtado
 * @apiSuccess {String} url Url/link original
 * @apiSuccess {String} shortUrl Url/link encurtada
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      [
 *          {
 *              "id":"23094",
 *              "hits":1003,
 *              "url":"http://globo.com",
 *              "shortUrl":"http://chr.dc/9dtr4"
 *          },
 * 
 *          {
 *              "id":"23094",
 *              "hits":1003,
 *              "url":"http://globo.com",
 *              "shortUrl":"http://chr.dc/9dtr4"
 *          },
 *          {
 *              "id":"23094",
 *              "hits":1003,
 *              "url":"http://globo.com",
 *              "shortUrl":"http://chr.dc/9dtr4"
 *          },
 *          {
 *              "id":"23094",
 *              "hits":1003,
 *              "url":"http://globo.com",
 *              "shortUrl":"http://chr.dc/9dtr4"
 *          },
 *          {
 *              "id":"23094",
 *              "hits":1003,
 *              "url":"http://globo.com",
 *              "shortUrl":"http://chr.dc/9dtr4"
 *          }
 *      ]
 *    }
 *
 */
router.get('/top5', controller.top5);
/**
 * @api {get} dados/hitsTotais HitsTotais
 * @apiDescription
 * Procedimento para mostrar a quantidade total de vezes que todos os links/urls foram encurtados
 * @apiGroup Dados
 *
 * @apiSuccess {int} hitsTotais Recebimento do total de vezes que foi encurtado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "hitsTotais":500
 *    }
 *
 */
router.get('/hitsTotais', controller.hitsTotais);
/**
 * @api {post} dados/encurtar Encurtar
 * @apiDescription
 * Procedimento para encurtar uma url/link
 * @apiGroup Dados
 * 
 * @apiParam {String} res.body.url  Url para ser encurtada.
 * 
 * @apiSuccess {String} id Código de identificação
 * @apiSuccess {int} hits Quantidade de vezes que o url/link foi encurtado
 * @apiSuccess {String} url Url/link original
 * @apiSuccess {String} shortUrl Url/link encurtada
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      {
 *         "id":"23094",
 *         "hits":1,
 *         "url":"http://globo.com",
 *         "shortUrl":"http://chr.dc/9dtr4"
 *      }
 *    }
 *
 */
router.post('/encurtar', controller.encurtar);
module.exports = router;