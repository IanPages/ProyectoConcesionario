import {Marca} from '../models/marca.js';
import {Coche} from '../models/coche.js';

export const getMarcas = async (req,res) => {
    try {
        const marcas =await Marca.findAll();
        res.json(marcas);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const getMarca = async (req,res) => {
    try {
        const {id} = req.params;
        const marca =await Marca.findOne({
            where: {id}
        });
        if(!marca){
            return res.status(404).json({message: 'La marca no está en la base de datos'});
        }
        res.json(marca);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const createMarca = async (req,res) => {
    const {nombre} = req.body;
    try {
        const newMarca = await Marca.create({
            nombre
        });
        res.json(newMarca);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const updateMarca = async (req,res) => {
    
    try {
        const {id} = req.params; 
        const {nombre} =req.body;
        const marca = await Marca.findByPk(id);
        marca.nombre=nombre
        await marca.save();
        res.json(marca);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const deleteMarca = async (req,res) => {
    try {
        const {id} = req.params;
        await Marca.destroy({
            where:{id}
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const getMarcaCoches = async (req,res) => {
    try {
        const {id}= req.params;
        const coches = await Coche.findAll({
            where: {
                marcaId: id
            }
        });
        res.json(coches);
    } catch (error) {
        return res.status(500).json({message: error.message});       
    }

};