import '../inicio/index.scss';
import Barra from '../../components/menu'






export default function Inicio() {

    return(
     <main className='menu'>
     <Barra/>

     <div className='barra-pesquisa'>
        <input type="text" placeholder='Buscar por Nome' className='texto' />
        <img src='./images/icon-buscar.png' className='lupa' alt='busca' />
     </div>

     <div className='animes'>

      <div className='Mob'>
        <a href='/detalhes'>
        <img src='./images/mob.png' alt='Mob' className='capa'/>
        </a>
        <h1 className='mob'>Mob psycho 100</h1>
      </div>

     <div className='Spy'>
      <img src='./images/spyxfamily.png' alt='spy' className='capa2' />
      <h1 className='family'>Spy x Fmaily</h1>
     </div>

     <div className='Kaguya'>
      <img src='./images/KAGUYA-SAMA LOVE IS WAR.png' alt='kaguya' className='capa3' />
      <h1 className='love'>KAGUYA-SAMA LOVE <br/> IS WAR</h1>
     </div>

     </div>

     </main>

    );
    
}