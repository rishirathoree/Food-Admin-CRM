import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import './Middlewares/DatabaseConnection.js'
import sequelize from './Middlewares/DatabaseConnection.js'

// Routers
import AuthenticationRouter from './Routes/Authentication.js'
import DashboardRouter from './Routes/Dashboard.js'
import categoriesRouter from './Routes/Categories.js'
import foodsRouter from './Routes/Foods.js'
import menusRouter from './Routes/Menus.js'

// models
import Categories from './Models/Categories.js'
import Users from './Models/Users.js'
import Foods from './Models/Foods.js'
import Menus from './Models/Menus.js'

const app = express()

app.use(express.json())

app.use(cors())


// defining all routes
app.use('/auth',AuthenticationRouter)
app.use('/',DashboardRouter)
app.use('/category',categoriesRouter)
app.use('/menus',menusRouter)
// app.use('/foods',foodsRouter)

// model synching
Users.sync().then(() => {console.log('User model synced successfully');}).catch((err) => {console.log('Error syncing User model:', err);});
Categories.sync().then(() => { console.log('Category Synced') }).catch((err) => { console.log(err) })
Menus.sync().then(() => { console.log('Menus Synced') }).catch((err) => { console.log('Menus model err',err) })
// sequelize.sync().then(()=>{console.log('Database synced')}).catch((err)=>{console.log('err syncing database sqlz')})


// relationships

// for categories
Categories.belongsTo(Users, { foreignKey: 'restaurantId', as: 'restaurant' });


// for menus 
Categories.belongsToMany(Menus,{foreignKey: 'categoryId', as:'categories'})

const PORT = process.env.PORT || 5000;

const IP_ADDRESS = '192.168.1.24' || 'localhost'

app.listen(PORT, IP_ADDRESS, () => {
    console.log(`Server running on http://${IP_ADDRESS}:${PORT}`);
  }).on('error', (err) => {
    console.error('Server error:', err.message);
  });