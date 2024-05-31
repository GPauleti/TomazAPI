import {db} from '../db.js';
export const getAvaliacoes = (_,res) => {

    const q = "SELECT * FROM avaliacoes";

    db.query(q,(err,data) =>{

        if (err) return res.json(err);
        return res.status(200).json(data);

    });
};

export const addAvaliacao = (req,res) => {

        const q =
        "INSERT INTO avaliacoes(`avaliacao`,`FK_idfilme`,`FK_idlivro`,`FK_idserie`) VALUES(?)";
    
        const values = [
            req.body.avaliacao,
            req.body.FK_idfilme,
            req.body.FK_idlivro,
            req.body.FK_idserie,
        ];
        db.query(q,[values], (err)=>{
            if(err) return res.json(err);
            return res.status(200).json("Avaliação criada com sucesso");
        });
    
    };

