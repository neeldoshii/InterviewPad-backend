import { DataTypes } from 'sequelize';
import {sequelize } from '../configs/database.js';

// sequelize.sequelize


const UserModel = sequelize.define('user',
    {
        user_id : {
            primaryKey : true,
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // lastName: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        email_id: {
            unique : true,
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role : {
            type : DataTypes.ENUM('interviewer', 'candidate'),
            allowNull: false
        },
        email_verified : {
            type : DataTypes.BOOLEAN,
            defaultValue : false
        },
        // createdAt : {
        //     type : DataTypes.DATE,
        //     defaultValue : DataTypes.NOW
        // }
    }, {
        tableName : "users",
        timestamps : false
    }
)

console.log(UserModel === sequelize.models.user); 

export default UserModel;