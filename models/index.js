const dbConfig = require("../config/dbConfig");
const {Sequelize,DataTypes} = require("sequelize");

//creating instance to connect Sequelize with database by Passing parameters separately
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,

        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
);
//to test if the connection is Ok or not
sequelize.authenticate()
    .then(()=>{
        console.log('Connection has been established successfully.');
    })
    .catch (err => {
        console.log('Unable to connect to the database:', err);
    });
const db = {}
db.Sequelize = Sequelize     //Constructor
db.sequelize = sequelize        //instance

db.products  = require('./productModel')(sequelize,DataTypes)        // products & review - table name
db.reviews  = require('./reviewModel')(sequelize,DataTypes)


db.sequelize.sync({force:false})     //.sync({ force: false }) it will not create table again & again
    .then(()=>{
        console.log('Yes re-sync done!!')
    })

module.exports = db