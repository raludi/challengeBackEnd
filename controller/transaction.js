
'use strict'

const Transaction = require('../models/Transaction');

const transactionController = {};

transactionController.getTransactions = (filters) => {
    const { action, currencyCode } = filters;
    return Transaction.find({ action: { $in: action }});
}