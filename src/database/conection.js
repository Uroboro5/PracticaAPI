import sql from 'mssql';
const sqlConfig = {
  user: 'Uroboro5',
  password: 'Mushroom1',
  database: 'practica',
  server: 'localhost',
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

export async function getConection() {
    try {
        const pool = await sql.connect(sqlConfig);
        return pool;
    } catch (error) {
        console.log(error.message);
    }
}

export { sql };