const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    usesr: 'root',
    password: 'johnahn',
    database: 'myapp'
});
exports.pool = pool; //pool을 다른 파일에서도 사용할 수 있게