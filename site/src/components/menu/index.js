import './index.scss'

import { Link } from 'react-router-dom';

export default function Index() {

    return(

      <nav className="comp-menu">

        <div className="logo">
            <img src="./images/Group 7.png" alt="logo" />
        </div>

        <div className="casa">
          <Link to='/inicio'>
            <img src="./images/casa.png" alt="casa" />
            <h1>Inicio</h1>
            </Link>
        

            <Link to='/genero'>
            <img src="./images/livro.png" alt="livro" />
            <h1>Gênero</h1>
            </Link>
      

            <Link to='/casdastraranime'>
            <img src="./images/adicionar.png" alt="adicinar" />
            <h1>Cadastrar</h1>
            </Link>
            
            <div className='usuario'>
              <span>J</span>
            </div>


        </div>
      </nav>
    );
}