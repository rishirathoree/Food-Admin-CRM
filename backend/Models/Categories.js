import { DataTypes } from "sequelize";
import sequelize from "../Middlewares/DatabaseConnection.js";
import Users from "./Users.js";

const Categories = sequelize.define('Categories', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: {
        primaryKey: true,
        type: DataTypes.STRING,
        unique:true,
        validate: {
            notEmpty: {
                msg: 'Please enter the category name'
            },
        }
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})



export default Categories