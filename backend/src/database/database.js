import Sequelize  from 'sequelize';

export const sequelize = new Sequelize(
    'concesionario','root','1234',
    {
        host: 'localhost',
        dialect: 'mysql'
        
    }
);