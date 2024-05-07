import express from 'express';


//importar las rutas de las tablas/funcionalidades
import marcaRoutes from './routes/marca.routes.js';
import cocheRoutes from './routes/coche.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';
import formularioRoutes from './routes/formulario.routes.js';

const app = express();


//middleware
app.use(express.json());

app.use(marcaRoutes);
app.use(cocheRoutes);
app.use(categoriaRoutes);
app.use(formularioRoutes);



export default app;