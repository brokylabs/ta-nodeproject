// Import Mahasiswa Model
const Mahasiswa = require("./mahasiswaModel");


// Hanlde Mahasiswa index / Get all Mahasiswa
exports.index = function(req, res){
    Mahasiswa.get(function(err, mahasiswa){
        if(err) {
            res.json({
                status : 'Error',
                message : err
            });
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
exports.view = function(req, res){
    Mahasiswa.findById(req.params.Mahasiswa_id, function(err, mahasiswa){
        if(err)
        res.send(err)
        res.json(mahasiswa);
    });
}

// Handle Update Data Mahasiswa
exports.update = function(req, res){
    Mahasiswa.findById(req.params.mahasiswa_id, function(err, mahasiswa){
        if(err)
        res.send(err)
        mahasiswa.nim = req.body.nim
        mahasiswa.nama = req.body.nama
        mahasiswa.jurusan = req.body.jurusan
        mahasiswa.semester = req.body.semester

        // Save Data Mahasiswa
        mahasiswa.save(function(err){
            if(err)
            res.send(err)
            res.json({
                message : 'Data Mahasiswa Updated!',
                data : mahasiswa
            });
        });
    })
}

// handle Delete Data Mahasiswa
exports.remove = function(req, res){
    Mahasiswa.remove({
        _id : req.params.Mahasiswa_id
    }, function(err, mahasiswa){
        if(err)
        res.send(err)
        res.json({
            status : 'Success!',
            message : 'Data Mahasiswa Deleted!!'
        })
    })
}