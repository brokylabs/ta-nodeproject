// Defines Packages
const router           = require('express').Router();

// // Middleware router
// router.use(function timeLog(req, res, next){
//     console.log('Time : ', Date.now());
//     next();
// });

router.get('/mahasiswa', function(req, res){
    res.json({
        message : 'Mahasiswa page'
    })
});
        



module.exports = router