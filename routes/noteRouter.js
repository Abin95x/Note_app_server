import express from 'express'
const noteRoute = express.Router()
import { addNote, getNotes, deleteNote } from '../controllers/noteController.js'

noteRoute.post('/addNote', addNote)

noteRoute.get('/getNotes', getNotes)

noteRoute.delete('/deleteNote', deleteNote)



export default noteRoute

