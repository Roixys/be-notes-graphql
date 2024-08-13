const Pool = require("pg").Pool;

require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
  if (err) {
    console.error("Error acquiring client", err.stack);
    process.exit(1);
  } else {
    console.log("Connected to the database");
    release();
  }
});

const Query = {
  allNotes: async (root, args, context, query) => {
    try {
      return (await pool.query("SELECT * FROM notes ORDER BY created_at DESC"))
        .rows;
    } catch (err) {
      throw new Error(`Failed to get all notes`, err);
    }
  },

  findNote: async (root, { id }, context, query) => {
    try {
      return (await pool.query("SELECT * FROM notes WHERE id = $1", [id]))
        .rows[0];
    } catch (err) {
      throw new Error(`Failed to find note with id ${id}:`, err);
    }
  },
};

const Mutation = {
  addNote: async (root, { title, body }) => {
    try {
      return (
        await pool.query(
          "INSERT INTO notes (title, body) VALUES ($1, $2) RETURNING id, title, body",
          [title, body]
        )
      ).rows[0];
    } catch (err) {
      throw new Error("Failed to insert new note:", err);
    }
  },

  editNote: async (root, { id, title, body }) => {
    try {
      return (
        await pool.query(
          "UPDATE notes SET title = $1, body = $2 WHERE id = $3 RETURNING id, title, body",
          [title, body, id]
        )
      ).rows[0];
    } catch (err) {
      throw new Error("Failed to update note:", err);
    }
  },

  deleteNote: async (root, { id }) => {
    try {
      return (
        await pool.query(
          "DELETE FROM notes WHERE id = $1 RETURNING id, title, body",
          [id]
        )
      ).rows[0];
    } catch (err) {
      throw new Error("Failed to delete note:", err);
    }
  },
};

module.exports = {
  Query,
  Mutation,
};
