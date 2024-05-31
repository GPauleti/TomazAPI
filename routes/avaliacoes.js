import express from 'express'
import {getAvaliacoes,addAvaliacao} from '../controllers/avaliacao.js'

const router = express.Router()

router.get('/avaliacoes', getAvaliacoes)
router.post('/avaliacoes', addAvaliacao)

export default router
