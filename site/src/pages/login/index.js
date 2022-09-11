import axios from 'axios'
import { useNavigate } from 'react-router-dom';


import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef, useState } from "react";
import {Logar} from '../../api/usuarioAPI.js'


import './index.scss';



export default function Index () {
    const [Email, SetEmail] =useState('');
    const [Senha, SetSenha] = useState('');
    const [Erro, SetErro] = useState('');
    const [Carregando, SetCarregando] = useState(false);

    const ref= useRef();

    const navigate = useNavigate();

  


    return(
       <main className='pai'>

       <section className='oi'>

        <div className='bem-vindo'>
         <img src='./images/Group 1.png'></img>
              <h1>Bem Vindo</h1>
              <h1 className='faça'>Faça Login</h1>
         </div>

        <div>
        <div className='oioi'>
        <label>Email:</label>
        <input type='text' placeholder='Informe seu e-mail' value={Email} onChange={e => SetEmail(e.target.value) } />
        </div>
        
        <div className='oioi'>
        <label>Senha:</label>
        <input type='password' placeholder='*****' value={Senha} onChange={e => SetSenha(e.target.value)} />
        </div>

        <div className='entra'>
        <button className='bt' disabled={Carregando}>Entra</button>
        </div>
        
        <div className='invalido'>
             {Erro}
        </div>

        <div className='cadastrar'>
        <h4>Não possui uma conta? <br/>
         Crie uma agora clicando <a href='/cadastraradm'>aqui</a> </h4>
        </div>

        </div>
         
         </section>
       </main>
    );

}