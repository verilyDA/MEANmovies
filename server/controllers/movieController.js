const Movie = require('mongoose').model('Movie');

module.exports = {
    index(req, res) {
        // get all resources
        Movie.find({})
            .then(movies => res.json(movies))
            .catch(console.log);
    },
    create(req, res) {
        // create resource
        Movie.create(req.body)
            .then(movie => res.json(movie))
            .catch(error => {
                res.status(500)
                    .json(
                        Object.keys(error.errors).map(key => error.errors[key].message)
                    );
            });
    },
    read(req, res) {
        // get one resource
        Movie.findById(req.params.movie_id)
            .then(movie => res.json(movie))
            .catch(console.log);
    },
    update(req, res) {
        // update resource
        Movie.findByIdAndUpdate(req.params.movie_id, req.body, { new: true })
            .then(movie => res.json(movie))
            .catch(console.log);
    },
    delete(req, res) {
        // delete resource
        Movie.findByIdAndRemove(req.params.movie_id)
            .then(movie => res.json(movie))
            .catch(console.log);
    },
};

