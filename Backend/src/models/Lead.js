const mongoose = require('mongoose');


const LeadSchema = new mongoose.Schema({
    nome : { type: String, required: true},
    telefone : { type: String, required: true },
    email : { type: String, required: true },
    aceite : { type: Boolean },
    createdAt : { type : Date, default : Date.now }
    
})


module.exports = mongoose.model('Lead' , LeadSchema);