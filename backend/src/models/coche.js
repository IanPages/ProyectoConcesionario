import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js';

export const Coche = sequelize.define('coches', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modelo: {
        type:DataTypes.STRING
    },
    a_salida: {
        type: DataTypes.INTEGER
    },
    precio: {
        type: DataTypes.DECIMAL(10,2)//hasta 10 cifras y 2 decimales
    },
    tipo_combustible:{
        type: DataTypes.STRING
    },
    kilometraje:{
        type: DataTypes.INTEGER
    },
    imagen:{
        type:DataTypes.STRING
    }

},{
    timestamps: false
});