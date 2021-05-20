const  mongoose  = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Scheme.ObjectId;

const mahasiswaSchema = new Schema({
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
