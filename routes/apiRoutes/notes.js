const router = require('express').Router();

const { db } = require('./db/db.json');
const { animals } = require('./db/animals');

router.get('/animals', (req, res) => {    
    let results = animals;
    res.send(results);
});

module.exports = router;