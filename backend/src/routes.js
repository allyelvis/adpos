const express = require('express');
const db = require('./db');
const router = express.Router();

router.get('/products', async (req, res) => {
    const products = await db.query('SELECT * FROM products');
    res.json(products.rows);
});

router.post('/sales', async (req, res) => {
    const { saleData } = req.body;
    res.status(201).send('Sale recorded');
});

module.exports = router;
