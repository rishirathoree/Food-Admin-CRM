import { DataTypes } from 'sequelize';
import sequelize from '../Middlewares/DatabaseConnection.js';

const Users = sequelize.define('Users', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            notEmpty: {
                msg: 'Username Field Needed',
            },
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            notEmpty: {
                msg: 'Email Field Needed',
            },
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: 'Password Field Needed',
            },
        },
    },
    role: {
        type: DataTypes.ENUM('user', 'admin', 'superadmin'),
        defaultValue: 'user',
    },
});



export default Users;
