const dataMapper = require('./../dataMapper');

maintController = {

    homePage: async (req, res) => {
        try {
        const coffees = await dataMapper.getAllCoffee();    
        res.render ('accueil', { coffees });
        } catch (error) {
        console.log(error);
        res.status(500).send('Erreur 500 - Le serveur ne répond pas ...');
        }
    },

    cataloguePage: async (req, res) => {
        try {
        const coffees = await dataMapper.getAllCoffee();    
        res.render ('catalogue', { coffees });
        } catch (error) {
        console.log(error);
        res.status(500).send('Erreur 500 - Le serveur ne répond pas ...');
        }
    },
               
    articlePage: async (req, res) => {
        try {
        const id = parseInt(req.params.id, 10);
        const coffees = await dataMapper.getAllCoffee();    
        res.render ('article', { coffees });
        } catch (error) {
        console.log(error);
        res.status(500).send('Erreur 500 - Le serveur ne répond pas ...');
        }
    },

    boutiquePage: (req, res) => {
        res.render ('boutique');
    },
};


module.exports = maintController;