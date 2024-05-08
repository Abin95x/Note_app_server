import express from 'express'
const app = express()
import cors from 'cors'
import noteRoute from './routes/noteRouter.js'

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','DELETE'],
}))

app.use('/',noteRoute)

app.listen('3000',()=>{
    console.log('running...')
})