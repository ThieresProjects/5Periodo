// const sql = require('mssql')

// const db = async () => {
//     try {
//         await sql.connect(process.env.DB_URL)
//         const result = await sql.query`select * from hUm`
//         console.dir(result)
//     } catch (err) {
//         console.error(err)
//     }
// }

// export default db;

const sequelize = require('sequelize');

const database = new sequelize(process.env.DB_URL)

database.init();

module.exports = database;