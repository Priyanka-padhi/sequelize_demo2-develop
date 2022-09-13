module.exports = {
    HOST : 'localhost',
    USER: 'root',
    PASSWORD: "123",
    DB: 'node_sequelize_db',
    dialect:"postgres",

    // pool configuration used to pool database connections
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle:10000
    }
}