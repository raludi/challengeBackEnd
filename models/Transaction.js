
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
const TransactionSchema = mongoose.Schema({
    action: {
        type: String,
    },
    amount: {
        type: Number,
    },
    brandId: {
        type: Number,
    },
    card: {
        type: Schema.Types.ObjectId,
        ref: 'card',
        required: [true, 'User object required']
    },
    currencyCode: {
        type: String
    },
    trackingCode: {
        type: String
    }
}, schemaOptions);

const TransactionModel = mongoose.model('transaction', TransactionSchema);

module.exports = TransactionModel;

