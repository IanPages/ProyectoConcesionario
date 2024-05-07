import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js';
import {Coche} from './coche.js';

export const Categoria = sequelize.define('categorias',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING
    }
},{
    timestaps: false
});

Categoria.hasMany(Coche,{
    foreignKey: 'categoriaId',
    sourceKey: 'id'
});

Coche.belongsTo(Categoria,{
    foreignKey: 'categoriaId',
    targetId: 'id'
});