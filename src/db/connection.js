import pg from 'pg';

const pool = new pg.Pool({ssl: {rejectUnauthorized: false}});

export {pool};
