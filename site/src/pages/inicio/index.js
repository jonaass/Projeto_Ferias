import '../inicio/index.scss';
import Barra from '../../components/menu'
import Animes from '../../components/animes'
import Carousel from 'react-elastic-carousel'




export default function Inicio() {

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 480, itemsToShow: 1.4 },
    { width: 750, itemsToShow: 2.4, itemsToScroll: 2 },
    { width: 1100, itemsToShow: 3.4, itemsToScroll: 3 },
    { width: 1560, itemsToShow: 4.4, itemsToScroll: 4 }
  ]

  return (
    <main className='menu'>
      <Barra />


      <div className='categorias'>

        <Carousel breakPoints={breakpoints}>
          <Animes img='/images/mob.png' nome='Mob' />
          <Animes img='/images/spyxfamily.png' nome='SpyxFamily' />
          <Animes img='/images/KAGUYA-SAMA LOVE IS WAR.png' nome='Kaguya-Sama Love IS War' />
          <Animes img='/images/blue-lock.png' nome='Blue Lock' />
          <Animes img='/images/chainsaw man.png' nome='Chainsaw Man' />
          <Animes img='/images/Boku no Hero Academia.png' nome='Boku no Hero Academia' />

        </Carousel>

      </div>
    </main>

  );

}