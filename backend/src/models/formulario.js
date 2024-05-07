import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js';

export const Formulario = sequelize.define('formularios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type:DataTypes.STRING
    },
    correo_electronico: {
        type:DataTypes.STRING
    },
    titulo: {
        type: DataTypes.STRING
    },
    mensaje: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});