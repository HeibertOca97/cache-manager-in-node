const {Sequelize} = require('sequelize');
const {DB_NAME, DB_USERNAME, DB_PASSWORD, DB_DRIVER} = require('../core/env');

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: 'localhost',
    dialect: DB_DRIVER,
});


const handleConnection = async () => {
    try{
        await sequelize.authenticate();
    }catch(error) {
        console.log(`Couldn't connect to the database: ${error}`)
    }
}

handleConnection();

module.exports = sequelize;