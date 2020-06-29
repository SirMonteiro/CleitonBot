const { Schema, model } = require('mongoose');

const db = Schema({
    id: String,
    prefix: {
        default: '?',
        type: String
    }
});

module.exports = model('db', db, 'guilds')