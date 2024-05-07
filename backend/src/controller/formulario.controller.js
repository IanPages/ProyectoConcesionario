import {Formulario} from '../models/formulario.js';

export const getFormularios = async (req,res) => {
    try {
        const formularios = await Formulario.findAll();
        res.json(formularios);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const getFormulario = async (req,res) => {
    try {
        const {id} = req.params;
        const formulario = await Formulario.findOne({
            where: {id}
        });
        if(!formulario) return res.status(404).json({message: 'El formulario no se encuentra en la base de datos'});
        res.json(formulario);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const createFormulario = async (req,res) => {
    try {
        const{nombre,correo_electronico,titulo,mensaje} = req.body;
        const newFormulario = await Formulario.create({
            nombre,
            correo_electronico,
            titulo,
            mensaje
        });
        res.json(newFormulario);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const updateFormulario = async (req,res) => {
    try {
        const {id} = req.params;
        const{nombre,correo_electronico,titulo,mensaje} = req.body;
        const formulario = await Formulario.findOne({
            where: {id}
        });
        formulario.nombre=nombre;
        formulario.correo_electronico=correo_electronico;
        formulario.titulo=titulo;
        formulario.mensaje=mensaje;
        await formulario.save();
        return res.json(formulario);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const deleteFormulario = async (req,res) => {
    try {
        const {id} =req.params;
        await Formulario.destroy({
            where: {id}
        });
        res.status(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};