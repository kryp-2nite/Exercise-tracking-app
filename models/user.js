const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    content: {type: String},
    date: {type: Date},
},{
    timestamps: true
})

const userSchema = new Schema({
    name: {type: String},
    email: {type: String},
    googleId: {type: String},
    birthday: {type: String, match: /[/][1-9]\d?/},
    notes: [noteSchema],
},{
    timestamps: true
})



module.exports = mongoose.model('User', userSchema);