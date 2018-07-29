const Review = require('mongoose').model('Review'); 

module.exports = {
    index(req, res) {
        // get all resources
        Review.find({"for_movie": req.params.movie_id})
            .then(reviews => res.json(reviews))
            .catch(console.log);
    },
    create(req, res) {
        // create resource
        Review.create(req.body)
            .then(review => res.json(review))
            .catch(error => {
                res.status(500)
                    .json(
                        Object.keys(error.errors).map(key => error.errors[key].message)
                    );
            });
    },
    read(req, res) {
        // get one resource
        Review.findById(req.params.review_id)
            .then(review => res.json(review))
            .catch(console.log);
    },
    update(req, res) {
        // update resource
        Review.findByIdAndUpdate(req.params.review_id, req.body, { new: true })
            .then(review => res.json(review))
            .catch(console.log);
    },
    delete(req, res) {
        // delete resource
        Review.findByIdAndRemove(req.params.review_id)
            .then(review => res.json(review))
            .catch(console.log);
    },
};

