import { db } from '../db.js';

export const getFilmes = async (_, res) => {
  try {
    const result = await db.query('SELECT * FROM filmes')

    return res.status(200).json(result.rows);
  } catch (err) {
    return res.json(err);
  }
};

export const addFilme = async (req, res) => {
  const query = `
    INSERT INTO filmes(titulofilme, diretorfilme, anolancamentofilme, elencofilme, paisfilme, urlfilme, generofilme)
    VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *
  `;
  const values = [
    req.body.titulofilme,
    req.body.diretorfilme,
    req.body.anolancamentofilme,
    req.body.elencofilme,
    req.body.paisfilme,
    req.body.urlfilme,
    req.body.generofilme
  ];

  try {
    const result = await db.query(query, values);
    return res.status(200).json("Filme criado com sucesso");
  } catch (err) {
    return res.json(err);
  }
};

export const updateFilme = async (req, res) => {
  const query = `
    UPDATE filmes
    SET titulofilme = $1, diretorfilme = $2, anolancamentofilme = $3, elencofilme = $4, paisfilme = $5, urlfilme = $6, generofilme = $7
    WHERE idfilme = $8 RETURNING *
  `;
  const values = [
    req.body.titulofilme,
    req.body.diretorfilme,
    req.body.anolancamentofilme,
    req.body.elencofilme,
    req.body.paisfilme,
    req.body.urlfilme,
    req.body.generofilme,
    req.params.id
  ];

  try {
    const result = await db.query(query, values);
    return res.status(200).json("Filme atualizado com sucesso");
  } catch (err) {
    return res.json(err);
  }
};

export const deleteFilme = async (req, res) => {
  const query = 'DELETE FROM filmes WHERE idfilme = $1 RETURNING *';
  const values = [req.params.id];

  try {
    const result = await db.query(query, values);
    return res.status(200).json("Filme deletado com sucesso");
  } catch (err) {
    return res.json(err);
  }
};
