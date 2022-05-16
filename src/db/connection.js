import pg from 'pg';

const pool = new pg.Pool({
    connectionString: process.env.CONN_STRING,
    ssl: false
});

export { pool };
