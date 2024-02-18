import { DataTypes } from "sequelize";
import sequelize from "../Middlewares/DatabaseConnection.js";

const Users = sequelize.define('Users',{
    id:{
        primaryKey:true,
        type:DataTypes.STRING,
        autoIncrement: true,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:true,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true,
    }
})

Users.sync().then('User Sync').catch((err)=>{console.log('err user model',err)})

export default Users;