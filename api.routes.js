// Defines Packages
const router           = require('express').Router();

// // Middleware router
// router.use(function timeLog(req, res, next){
//     console.log('Time : ', Date.now());
//     next();
// });
// Insert Mahasiswa Controller
const mahasiswaController = require('./mahasiswaController')

router.get('/', function(req, res){
    res.json({
        message : 'Home page'
    })
});

router.route('/mahasiswa')
        .get(mahasiswaController.index)
        .post(mahasiswaController.new)


router.route('/mahasiswa/:mahasiswa_id')
        .get(mahasiswaController.view)
        .put(mahasiswaController.update)
        .delete(mahasiswaController.remove)
        

module.exports = router