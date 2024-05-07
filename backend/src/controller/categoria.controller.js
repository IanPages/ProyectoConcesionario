import {Categoria} from '../models/categoria.js';
import {Coche} from '../models/coche.js';

export const getCategorias = async (req,res) => {
    try {
        const categorias =await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const getCategoria = async (req,res) => {
    try {
        const {id} = req.params;
        const categoria =await Categoria.findOne({
            where: {id}
        });
        if(!categoria){
            return res.status(404).json({message: 'La categoria no está en la base de datos'});
        }
        res.json(categoria);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const createCategoria = async (req,res) => {
    
    try {
        const {nombre} = req.body;
        const newCategoria = await Categoria.create({
            nombre
        });
        res.json(newCategoria);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const updateCategoria = async (req,res) => {
    
    try {
        const {id} = req.params; 
        const {nombre} =req.body;
        const categoria = await Categoria.findByPk(id);
        categoria.nombre=nombre
        await categoria.save();
        res.json(categoria);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const deleteCategoria = async (req,res) => {
    try {
        const {id} = req.params;
        await Categoria.destroy({
            where:{id}
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const getCategoriaCoches = async (req,res) => {
    try {
        const {id}= req.params;
        const coches = await Coche.findAll({
            where: {
                categoriaId: id
            }
        });
        res.json(coches);
    } catch (error) {
        return res.status(500).json({message: error.message});       
    }

};