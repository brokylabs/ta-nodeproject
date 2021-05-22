// Import Mahasiswa Model
const Mahasiswa = require("./mahasiswaModel");


// Hanlde Mahasiswa index / Get all Mahasiswa
exports.index = function(req, res){
    Mahasiswa.find(function(err, mahasiswa){
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

    // Find Data Mahasiswa if nim is already
    const cekNim = req.body.nim;
    Mahasiswa.findOne({nim:cekNim}, function(err, mahasiswa){
        if(err) res.json({
            message : err
        })
        if(mahasiswa){
            res.json({
                message : 'This NIM is Already been saved!'
            })
        } else {
            const mahasiswa = new Mahasiswa();
            mahasiswa.nim = req.body.nim
            mahasiswa.nama = req.body.nama
            mahasiswa.jurusan = req.body.jurusan
            mahasiswa.semester = req.body.semester
        
            
            // Hanlde Save Data Mahasiswa
            mahasiswa.save(function(err){
                if(err) {
                    res.json({
                        status : 'error',
                        message : err
                    })
                }
                res.json({
                    message : 'New Mahasiswa Created!',
                    data : mahasiswa
                })
            })
        }
    });

}

// Handle View Mahasiswa
exports.view = function(req, res){
    Mahasiswa.findById(req.params.mahasiswa_id, function(err, mahasiswa){
        if(err)
        res.send(err)
        res.json({
            message : 'Mahasiswa Detail!',
            data : mahasiswa
        });
    });
}

// Handle Update Data Mahasiswa
exports.update = function(req, res){
    Mahasiswa.findById(req.params.mahasiswa_id, function(err, mahasiswa){
        if(err) 
        res.send(err)
        mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
        mahasiswa.nama = req.body.nama
        mahasiswa.jurusan = req.body.jurusan
        mahasiswa.semester = req.body.semester

        // Handle save data mahasiswa
        mahasiswa.save(function(err){
            if(err) {
                res.json({
                    status : 'error',
                    message : err
                })
            }
            res.json({
                message : 'Data Updated!',
                data : mahasiswa
            })
        })
    })
}

// handle Delete Data Mahasiswa
exports.remove = function(req, res){
    Mahasiswa.deleteOne({
        _id : req.params.mahasiswa_id
    }, function(err, mahasiswa){
        if(err)
        res.send(err)
        res.json({
            status : 'Success!',
            message : 'Data Mahasiswa Deleted!!'
        })
    })
}