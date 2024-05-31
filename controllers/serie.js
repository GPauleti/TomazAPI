import {db} from '../db.js';
export const getSeries = (_,res) => {

    const q = "SELECT * FROM series";

    db.query(q,(err,data) =>{

        if (err) return res.json(err);
        return res.status(200).json(data);

    });

};

export const addSerie = (req,res) => {

    const q =
    "INSERT INTO series(`tituloserie`,`anolancamentoserie`,`elencoserie`,`paisserie`,`plataforma`,`temporadas`,`urlserie`, `generoserie`) VALUES(?)";

    const values = [
        req.body.tituloserie,
        req.body.anolancamentoserie,
        req.body.elencoserie,
        req.body.paisserie,
        req.body.plataforma,
        req.body.temporadas,
        req.body.urlserie,
        req.body.generoserie

    ];
    db.query(q,[values], (err)=>{
        if(err) return res.json(err);
        return res.status(200).json("Série criada com sucesso");
    });

};

export const updateSerie = (req,res) => {

    const q =
    "UPDATE series SET `tituloserie`=?,`anolancamentoserie`=?,`elencoserie`=?,`paisserie`=?,`plataforma`=?, `temporadas`=?, `urlserie`=?, `generoserie`=? WHERE `idserie` = ?";

    const values = [
        req.body.tituloserie,
        req.body.anolancamentoserie,
        req.body.elencoserie,
        req.body.paisserie,
        req.body.plataforma,
        req.body.temporadas,
        req.body.urlserie,
        req.body.generoserie
    ];
    db.query(q,[...values, req.params.id], (err)=>{

        if(err) return res.json(err);
        return res.status(200).json("Série atualizada com sucesso");
    });

};

export const deleteSerie = (req,res) => {

    const q =
    "DELETE FROM series WHERE `idserie` = ?";

    db.query(q,[req.params.id], (err)=>{

        if(err) return res.json(err);
        return res.status(200).json("Série deletada com sucesso");
    });

};