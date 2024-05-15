import Sequelize  from 'sequelize';

export const sequelize = new Sequelize(
    'concesionario','root','',
    {
        host: 'localhost',
        dialect: 'mysql'
        
    }
);