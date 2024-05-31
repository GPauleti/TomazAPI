import { db } from '../db.js';

export const getLivros = async (_, res) => {
  try {
    const result = await db.query('SELECT * FROM livros');
    return res.status(200).json(result.rows);
  } catch (err) {
    return res.json(err);
  }
};

export const addLivro = async (req, res) => {
  const query = `
    INSERT INTO livros(titulolivro, autorlivro, anopublicacaolivro, editoralivro, paislivro, capa, generolivro)
    VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *
  `;
  const values = [
    req.body.titulolivro,
    req.body.autorlivro,
    req.body.anopublicacaolivro,
    req.body.editoralivro,
    req.body.paislivro,
    req.body.capa,
    req.body.generolivro
  ];

  try {
    const result = await db.query(query, values);
    return res.status(200).json("Livro criado com sucesso");
  } catch (err) {
    return res.json(err);
  }
};

export const updateLivro = async (req, res) => {
  const query = `
    UPDATE livros
    SET titulolivro = $1, autorlivro = $2, anopublicacaolivro = $3, editoralivro = $4, paislivro = $5, capa = $6, generolivro = $7
    WHERE idlivro = $8 RETURNING *
  `;
  const values = [
    req.body.titulolivro,
    req.body.autorlivro,
    req.body.anopublicacaolivro,
    req.body.editoralivro,
    req.body.paislivro,
    req.body.capa,
    req.body.generolivro,
    req.params.id
  ];

  try {
    const result = await db.query(query, values);
    return res.status(200).json("Livro atualizado com sucesso");
  } catch (err) {
    return res.json(err);
  }
};

export const deleteLivro = async (req, res) => {
  const query = 'DELETE FROM livros WHERE idlivro = $1 RETURNING *';
  const values = [req.params.id];

  try {
    const result = await db.query(query, values);
    return res.status(200).json("Livro deletado com sucesso");
  } catch (err) {
    return res.json(err);
  }
};
