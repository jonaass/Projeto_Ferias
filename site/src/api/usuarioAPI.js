import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function Logar(email , senha) {
    const resposta = await api.post('http://localhost:5000/usuario/login',{
        email:email,
        senha:senha
    })
    return resposta.data;
}