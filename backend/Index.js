import express from 'express'
import './Middlewares/DatabaseConnection.js'
import AuthenticationRouter from './Routes/Authentication.js'
import DashboardRouter from './Routes/Dashboard.js'
import categoriesRouter from './Routes/Categories.js'
import cors from 'cors'
import Categories from './Models/Categories.js'
import Users from './Models/Users.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/auth',AuthenticationRouter)

app.use('/',DashboardRouter)
app.use('/category',categoriesRouter)


Users.sync().then(() => {console.log('User model synced successfully');}).catch((err) => {console.log('Error syncing User model:', err);});
Categories.sync().then(() => { console.log('Category Synced') }).catch((err) => { console.log(err) })

Categories.belongsTo(Users, { foreignKey: 'restaurantId', as: 'restaurant' });

app.listen(5000,'192.168.1.38',()=>{console.log('server running')})
