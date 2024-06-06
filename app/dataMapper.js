const client = require('./database');

const dataMapper = {

    getAllCoffee: async () => {
        const query = 'SELECT * FROM "ocoffee"';
        const result = await client.query(query);
        return result.rows;
        },
        
        
        getDivCoffee: async (id) => {
            const query = 'SELECT name, price, description FROM ocoffee WHERE id = $1';
            const values = [id];
            const result = await client.query(query, values);
            console.log('resultat', result.rows[0]);
        return result.rows[0];
    },   
};

module.exports = dataMapper;


