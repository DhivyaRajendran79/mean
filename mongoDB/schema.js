const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    Name: {type: String},
    Address: {type: String},
    State: {type: String},
    Country: {type: String},
    impediment: {type: String},
    Date: {type: Date, default: Date.now}
})


module.exports = mongoose.model('Standup', studentSchema)