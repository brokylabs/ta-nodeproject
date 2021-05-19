// Defines Packages
const router           = require('express').Router();

// // Middleware router
// router.use(function timeLog(req, res, next){
//     console.log('Time : ', Date.now());
//     next();
// });

router.get('/', function(req, res){
    res.json({
        message : 'Home page'
    })
});
        



module.exports = router