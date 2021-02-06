var express = require('express');
var app = express();
app.use('/Project', express.static('project'));
app.use('/Assets', express.static('assets'));



app.get('/', function(req, res) {
    res.redirect('./Project/index.html')
    
});

app.listen(3000, () => {
    console.log('Servidor Rodando.');
})
