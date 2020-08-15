const burgers = require('./controllers/burgersController.js');

exports.route = (app) => {
    app.get('/', burgers.read);
    app.post('/burgers', burgers.create);
    app.put('/burgers/:id', burgers.update);
    app.delete('/burgers/:id', burgers.delete);

}
