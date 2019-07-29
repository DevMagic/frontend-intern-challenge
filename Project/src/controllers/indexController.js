
exports.get = (req, res, next) => {
    res.render('pages/index',{
        title: "Home"
    });    
};