const AuthorsController = require('../controllers/authors.controller');

module.exports = app => {
    app.get('/api/authors', AuthorsController.findAllAuthors);
    app.post('/api/authors/:new', AuthorsController.createNewAuthors);
    app.get('/api/authors/:id', AuthorsController.findOneSingleAuthors);
    app.put('/api/authors/:update/:id', AuthorsController.updateExistingAuthors);
    app.delete('/api/authors/:delete/:id', AuthorsController.deleteAnExistingAuthors);
};