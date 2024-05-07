import {Coche} from '../models/coche.js';

export const getCoches = async (req,res) => {
    try {
        const coches = await Coche.findAll();
        res.json(coches);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const getCoche = async (req,res) => {
    try {
        const {id} = req.params;
        const coche = await Coche.findOne({
            where: {id}
        });
        if(!coche) return res.status(404).json({message: 'El coche no se encuentra en la base de datos'});
        res.json(coche);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const createCoche = async (req,res) => {
    try {
        const{modelo,a_salida,precio,tipo_combustible,kilometraje,marcaId,categoriaId} = req.body;
        const newCoche = await Coche.create({
            modelo,
            a_salida,
            precio,
            tipo_combustible,
            kilometraje,
            marcaId,
            categoriaId
        });
        res.json(newCoche);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};
//AÑADIR marcaId y categoriaId
export const updateCoche = async (req,res) => {
    try {
        const {id} = req.params;
        const{modelo,a_salida,precio,tipo_combustible,kilometraje,marcaId,categoriaId} = req.body;
        const coche = await Coche.findOne({
            where: {id}
        });
        coche.modelo=modelo
        coche.a_salida=a_salida
        coche.precio=precio
        coche.tipo_combustible=tipo_combustible
        coche.kilometraje=kilometraje
        coche.marcaId=marcaId
        coche.categoriaId=categoriaId
        await coche.save();
        return res.json(coche);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};
//AÑADIR marcaId y categoriaId
export const deleteCoche = async (req,res) => {
    try {
        const {id} =req.params;
        await Coche.destroy({
            where: {id}
        });
        res.status(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};