import { DataTypes } from "sequelize";
import sequelize from "../Middlewares/DatabaseConnection.js";

const Menus = sequelize.define('Menus', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false,
        validate: {
            notEmpty: {
                msg: 'Please enter the food name'
            },
        }
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoryId:{
        type:DataTypes.JSON(DataTypes.STRING),
        allowNull:false,
        validate: {
            validateCategoryId(value) {
                if (!value || Object.keys(value).length === 0) {
                    throw new Error("Category ID can't be null or empty");
                }
            }
        }
    }
})

export default Menus