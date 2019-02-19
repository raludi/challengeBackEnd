'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schemaOptions = {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
};

// Esquema
const CardSchema = mongoose.Schema({
    expiryMonth: {
        type: String,
    },
    expiryYear: {
        type: String,
    },
    firstSixDigits: {
        type: String,
    },
    lastFourDigits: {
        type: String
    },
    holderName: {
        type: String
    }
}, schemaOptions);

const CardModel = mongoose.model('card', CardSchema);

module.exports = CardModel;