maintController = {

    homePage: (req, res) => {
        res.render ('accueil');
    },

    articlePage: (req, res) => {
        res.render ('article');
    },

    boutiquePage: (req, res) => {
        res.render ('boutique');
    },

    cataloguePage: (req, res) => {
        res.render ('catalogue');
    },

};


module.exports = maintController;