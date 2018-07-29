const reviewRoute = require('./reviewRoutes');
const movieRoute = require('./movieRoutes');
const router = require('express').Router();

module.exports = router
    .use('/review', reviewRoute)
    .use('/movie', movieRoute);