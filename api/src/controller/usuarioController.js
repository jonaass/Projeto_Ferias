import { Login } from '../repository/usuarioRepository.js';

import { Router } from 'express';
const serve = Router();



serve.post('/usuario/login', async ( req,resp) => {
    try {
        const { email,senha } = req.body;

        const resposta = await Login(email,senha);

        resp.send(resposta)

    } catch (err) {
        resp.status(401).send({
            erro:err.message
        })
    }
})

export default serve;