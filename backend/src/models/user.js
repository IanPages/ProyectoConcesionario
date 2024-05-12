import  {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";

export const User = sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
});