// Import Mahasiswa Model
const Mahasiswa = require("./mahasiswaModel");


// Hanlde Mahasiswa index / Get all Mahasiswa
exports.index = function(req, res){
    Mahasiswa.get(function(err, mahasiswa){
        if(err) {
            res.json({
                status : 'Error',
                message : err
            })
        }
        res.json({
            status : 'Success',
            message : 'Mahasiswa retrived successfuly!',
            data : mahasiswa
        });
    });
}

// Handle Create Mahasiswa
exports.new = function(req, res){
    const mahasiswa = new Mahasiswa();
    mahasiswa.nim = req.body.nim
    mahasiswa.nama = req.body.nama
    mahasiswa.jurusan = req.body.jurusan
    mahasiswa.semester = req.body.semester
    mahasiswa.save(function(err){
        if(err) {
            res.json({
                status : 'error',
                Message : err
            })
        }
        res.json({
            message : 'New Mahasiswa Created!',
            data : mahasiswa
        })
    })
}

// Handle View Mahasiswa
