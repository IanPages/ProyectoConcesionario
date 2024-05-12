import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';



//importar las rutas de las tablas/funcionalidades
import marcaRoutes from './routes/marca.routes.js';
import cocheRoutes from './routes/coche.routes.js';
import categoriaRoutes from './routes/categoria.routes.js';
import formularioRoutes from './routes/formulario.routes.js';
import userRoutes from './routes/user.routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use('/images', express.static(join(__dirname, 'images')));
app.use(cors());
//middleware
app.use(express.json());

app.use(marcaRoutes);
app.use(cocheRoutes);
app.use(categoriaRoutes);
app.use(formularioRoutes);
app.use(userRoutes);


export default app;