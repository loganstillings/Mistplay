var { games } = require('../games/games.js');

function getRelevantGames(searchText, currentIndex) {
    return games
        .filter((game, index) => index >= currentIndex) // filter out games above where the user is scrolled to
        .filter((game) => {
            return gameIsRelevant(game, searchText); // only return games relevant to the search
        })
        .slice(currentIndex, currentIndex + 20); // return a maximum of 20 games, since that is a realistic number for items per page with virtual scrolling
}

function gameIsRelevant(game, searchText) {
    var lowerCaseSearchText = searchText.toLowerCase(); // ignore casing for matching strings
    return (
        game.title.toLowerCase().includes(lowerCaseSearchText) || // check title
        game.pid.toLowerCase().includes(lowerCaseSearchText) // check package id (Including this because some titles contain special characters like Pokemon)
    );
}

module.exports = (function() {
    return {
        search: function(req, res) {
            res.json(
                getRelevantGames(req.body.searchText, req.body.currentIndex),
            );
        },
    };
})();
