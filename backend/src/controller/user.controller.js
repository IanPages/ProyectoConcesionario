import {User} from '../models/user.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const secretKey= "JWT_PASS";

export const getUser = async (req,res) => {
    try {
        const {id} = req.params;
        const user =await User.findOne({
            where: {id}
        });
        if(!user){
            return res.status(404).json({message: 'El usuario no está en la base de datos'});
        }
        res.json(user);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};
export const loginUser = async (req,res,next) =>{
    const {email,password} = req.body;
    User.findOne({
        where: {email}
    })
    .then(user =>{
        if(user.length < 1){
            return res.status(401).json({
                message: 'Autenticación fallida'
            });
        }
        bcrypt.compare(password, user.password, (err, result) =>{
            if (err){
                return res.status(401).json({
                    message: 'Autenticación fallida'
                });
            }
            if(result){
               const token = jsonwebtoken.sign({
                    email: user.email,
                    id: user.id
                }, 
                secretKey,
                {
                    expiresIn: "1h"
                } 
                );
                return res.status(200).json({
                    message: 'Autenticación correcta',
                    token: token
                });
            }
            return res.status(401).json({
                message: 'Autenticación fallida'
            });
        });
        
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
};

export const createUser = async (req,res,next) => {
    bcrypt.hash(req.body.password,10,(err,hash) =>{
        if(err){
            return res.status(500).json({
                error: err
            });
        }
        else{
            const user = new User({
        email: req.body.email,
        password: hash
        });
        user.save()
        .then(result =>{
            console.log(result);
            res.status(201).json({
                message: 'Usuario Creado'
            });
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
         
        }
    });
};


