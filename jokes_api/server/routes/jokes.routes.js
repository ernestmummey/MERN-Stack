const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:id', JokesController.findOneSingleJokes);
    app.put('/api/jokes/:update', JokesController.updateExistingJokes);
    app.post('/api/jokes/:new', JokesController.createNewJokes);
    app.delete('/api/jokes/:id', JokesController.deleteAnExistingJokes);
};