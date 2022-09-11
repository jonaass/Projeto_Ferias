import '../cadastraAdm/index.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef, useState } from "react";


export default function Index() {
    const [Email, SetEmail] =useState('');
    const [Senha, SetSenha] = useState('');
    const [Nome, SetNome] = useState('');
    const [Erro, SetErro] = useState('');
    const [Carregando, SetCarregando] = useState(false);

    const ref= useRef();

    const navigate = useNavigate();



    return(
        <main className='CadastraAdm'>

        <section className='sla'>

        <div className='bom-dia'>
         <img src='./images/Group 1.png'></img>
              <h1 className='Crie'>Crie Sua Conta</h1>
         </div>


        <div>

        <div className='escreva'>
            <label>Nome:</label>
            <input type='text' placeholder='Informe seu nome/nick' value={Nome} onChange={e => SetNome(e.target.value)} />
        </div>

        <div className='escreva'>
        <label>Email:</label>
        <input type='text' placeholder='Informe seu e-mail' value={Email} onChange={e => SetEmail(e.target.value) } />
        </div>
        
        <div className='escreva'>
        <label>Senha:</label>
        <input type='password' placeholder='*****' value={Senha} onChange={e => SetSenha(e.target.value)} />
        </div>

        <div className='entra2'>
        <button className='bt' disabled={Carregando}>Confirmar</button>
        </div>

        <div className='erro'>
             {Erro}
        </div>

        <div className='fazer'>
        <h4>Já possui uma conta?  <br/>
        Faça seu login clicando<a href='/'> aqui </a> </h4>
        </div>

        </div>

        </section>

        </main>
    );
}