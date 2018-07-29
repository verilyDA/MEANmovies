const { reviewController } = require('../controllers');
//const reviewController = require('../controllers/reviewController); this is the non barrel version

const router = require('express').Router();

// /reviews/:review_id

module.exports = router
    .get('/:movie_id', reviewController.index)
    .post('/', reviewController.create)
    .get('/:review_id', reviewController.read)
    .put('/:review_id', reviewController.update)
    .delete('/:review_id', reviewController.delete)