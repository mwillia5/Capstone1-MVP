

const mariaDB=require('mariadb');
const pool=mariaDB.createPool({
    host: '10.0.0.3',
    port: 3307,
    user: 'mat',
    password: '################',
    connectionLimit: 5,
    database: 'OrderManagementSystem'
})


module.exports =  pool;
