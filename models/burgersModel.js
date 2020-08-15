const mysql = require('../config/connection.js');

exports.selectAll = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM burgers;`);
    console.log(data);
    return data;
}
exports.insertOne = async (burger_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO burgers SET ?`, burger_obj);
    return data;
}
exports.updateOne = async (burgerId, burger_obj) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE burgers SET ? WHERE (id = ?)`, [burger_obj, burgerId]);
    return data;
}
exports.deleteOne = async (burgerId) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`DELETE FROM burgers WHERE id = ?`, burgerId);
    return data;
}
