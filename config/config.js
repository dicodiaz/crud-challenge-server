const {Pool} = require('pg');
const connectionString = 'postgresql://postgres:postgres@localhost:5432/proyecto_final';
const pool = new Pool({
  connectionString: connectionString,
  ssl: false
});

module.exports = {pool};
