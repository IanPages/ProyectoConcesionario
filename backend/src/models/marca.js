import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js';
import {Coche} from './coche.js';

export const Marca = sequelize.define('marcas',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,

    }

},
{
    timestamps: false
});

Marca.hasMany(Coche,{
    foreignKey: 'marcaId',
    sourceKey: 'id'
});

Coche.belongsTo(Marca,{
    foreignKey: 'marcaId',
    targetId: 'id'
});