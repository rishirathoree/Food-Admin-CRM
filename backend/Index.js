import express from 'express'
import './Middlewares/DatabaseConnection.js'
import AuthenticationRouter from './Routes/Authentication.js'

const app = express()
app.use(express.json())


app.use('/auth',AuthenticationRouter)

app.listen(5000,()=>{console.log('server running')})
