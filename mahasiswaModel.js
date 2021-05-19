const  mongoose  = require('mongoose');

const Scheme = mongoose.Scheme;
const objectId = Scheme.objectId;

const mahasiswaSchema = new Scheme({
    nim : {
        type : Number,
        require : true
    },
    nama : {
        type : String,
        require : true
    },
    jurusan : {
        type : String,
        require : true
    },
    semester : {
        type : String,
        require : true
    },
    date : {
        type : Date,
        default : Date.now()
    }
});


module.exports = mongoose.model('mahasiswa', mahasiswaSchema)
