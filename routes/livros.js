import express from 'express'
import {getLivros,addLivro,updateLivro,deleteLivro} from '../controllers/livro.js'

const router = express.Router()

router.get('/livros', getLivros)
router.post('/livros', addLivro)
router.put('/livros/:id', updateLivro)
router.delete('/livros/:id', deleteLivro)

export default router

