module.exports ={
    HOST: 'localhost',
    USER: 'root',
    PASSWORD:'password',
    DB:'node_sequelize_api_db_2_two',
    dialect: 'mysql',
    
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
}   