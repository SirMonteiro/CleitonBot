const { Schema, model } = require('mongoose');

const moneydb = Schema({
    guildID: String,
    userID: String,
    money: Number
});

module.exports = model('moneydb', moneydb, 'money')