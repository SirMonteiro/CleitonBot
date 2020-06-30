const { Schema, model } = require('mongoose');

const guildsdb = Schema({
    id: String,
    prefix: {
        default: '?',
        type: String
    }
});

module.exports = model('guildsdb', guildsdb, 'guilds')