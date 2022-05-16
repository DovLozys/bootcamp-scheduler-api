import { pool } from '../db/connection.js';

async function getProfileHistory(req, res) {
  console.log('getting profile data');
  const data = await pool.query('SELECT * FROM profiles WHERE profile_name = $1;', [
    req.params.name,
  ]);

  res.json({
    success: true,
    message: 'Profile data recieved.',
    payload: data.rows,
  });
}

async function deleteProfileHistory(req, res) {
  const data = await pool.query('DELETE FROM profiles WHERE profile_name = $1;', [
    req.params.name,
  ]);

  res.json({
    success: true,
    message: 'Profile deleted.',
  });
}

export { getProfileHistory, deleteProfileHistory };
