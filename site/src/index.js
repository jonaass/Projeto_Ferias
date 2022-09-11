import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import CadastrarAdm from './pages/cadastraAdm'
import Inicio from './pages/inicio'
import CadastrarAnm from './pages/cadastraAnime'
import Genero from './pages/genero'
import Detalhe from './pages/detalhes'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Login/>} />
     <Route path='/cadastraradm' element={<CadastrarAdm/>} />
     <Route path='/inicio' element={<Inicio/>} />
     <Route path='/casdastraranime' element={<CadastrarAnm />} />
     <Route path='/genero' element={<Genero />} />
     <Route path='/detalhes' element={<Detalhe />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

