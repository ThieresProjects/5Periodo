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

// const database = new sequelize("mssql://BANDEIRA:1434;encrypt=true;database=BD044987;user=RA044987;password={044987};TrustServerCertificate=true;");
// const database = new sequelize("Driver={SQL Server Native Client 11.0};Server=BANDEIRA,1434;Database=BD044987;Encrypt=True;Uid=RA044987;Psw={044987};MultipleActiveResultSets=True;TrustServerCertificate=True");
// const database = new sequelize(process.env.DB_BANDEIRA_CSTRING);
const database = new sequelize('BD044987','RA044987','044987',{
    dialect: 'mssql',
    host: 'BANDEIRA',
    port: '1434',
    dialectOptions: {
        // trustedConnection: true,
        trustServerCertificate: true
    },
})

database.init();

module.exports = database;