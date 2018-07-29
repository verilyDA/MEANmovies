const { movieController } = require('../controllers');
//const movieController = require('../controllers/movieController); this is the non barrel version

const router = require('express').Router();

// /movies/:movie_id

module.exports = router
    .get('/', movieController.index)
    .post('/', movieController.create)
    .get('/:movie_id', movieController.read)
    .put('/:movie_id', movieController.update)
    .delete('/:movie_id', movieController.delete)