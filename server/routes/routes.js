var game = require('../controllers/game.js');
module.exports = function(app) {
    app.post('/search', function(req, res) {
        game.search(req, res);
    });
};
