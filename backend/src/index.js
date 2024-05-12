import app from './app.js';
import {sequelize} from './database/database.js';

//implementar tablas por primera vez
import './models/categoria.js';
import './models/coche.js';
import './models/marca.js';
import './models/formulario.js';
import './models/user.js';

async function main() {
    try {
        await sequelize.sync({force:false}); 
        app.listen(4000);
        console.log('Server is listening at port', 4000);
    } catch (error) {
        console.log('Unable to connect',error);
    }
}; 

main();