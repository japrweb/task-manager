import { pool } from "../db.js";

export const getTasks = (req, res) => {
  res.send("obteniendo tareas");
};

export const getTask = (req, res) => {
  res.send("obteniendo una tarea");
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO tasks(title, description) VALUES (?, ?)",
    [title, description]
  );
  console.log(result);
  res.json({
    id: result.insertId,
    title,
    description,
  });
};

export const updateTask = (req, res) => {
  res.send("actualizando tarea");
};

export const delelteTask = (req, res) => {
  res.send("eliminando tarea");
};
