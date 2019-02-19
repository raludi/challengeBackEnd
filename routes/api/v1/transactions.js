
'use strict';

const { query } = require('express-validator/check');
const express = require('express');
const router = express.Router();
const checkAuth = require ('../../../middleware/chechAuth');

router.get('/', checkAuth(), 
    [
        query('action').optional(),
        query('currencyCode').optional()
    ], (req, res, next) => {

        
});