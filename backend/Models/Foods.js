import { DataTypes } from "sequelize";
import sequelize from "../Middlewares/DatabaseConnection.js";

const Foods = sequelize.define('Foods', {
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
                msg: 'Please enter the food name'
            },
        }
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    menuId: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        validate:{
            notEmpty: {
                msg: 'Send at least one category bro!',
              },
            customValidator(value) {
                if (value.length === 0) {
                  throw new Error('Send at least one category!!');
                }
              },
        }
    },
})

export default Foods