import express from 'express'
import {getSeries,addSerie,updateSerie,deleteSerie} from '../controllers/serie.js'

const router = express.Router()

router.get('/series', getSeries)
router.post('/series', addSerie)
router.put('/series/:id', updateSerie)
router.delete('/series/:id', deleteSerie)

export default router

