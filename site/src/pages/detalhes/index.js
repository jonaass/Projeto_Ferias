import '../detalhes/index.scss'
import Barra from '../../components/menu'


export default function Index() {


    return(
        <main>
            <Barra/>
        <section className='feliz'>

        <div className='principal'>

        <div className='imagens'>
        <img src='./images/mob.png' alt='mob' className='capa' />
        </div>

        <div className='text'>
            <h1>Mob psycho 100</h1>
        </div>

        <div className='genero'>
            <h1>Gênero: Ação , Comédia , Shounen , Slice Of Life , Sobrenatural</h1>
        </div>

        <div className='EP'>
            <h1>Episódios: 25</h1>
        </div>

        <div className='empressa'>
            <h1>Estúdio: estúdio Bones</h1>
        </div>

        <div className='sps'>
            <h1>Sinopse:</h1>
            <p className='his'>Kageyama Shigeo, o “Mob”, é um garoto que não leva muito jeito pra se expressar, mas que é um poderoso telepata. Decidido a levar uma vida normal, Mob suprime seus poderes extrassensoriais, mas quando suas emoções atingem um pico de 100%, algo terrível lhe acontece! Rodeado de falsos telepatas, espíritos do mal e misteriosas organizações, como Mob reagirá? Que decisões ele vai tomar?</p>
        </div>

        <div className='listap'>
          <h1 className='tempor'>1</h1>
          <p className='lista'>temporada +  </p>  
        </div>

        </div>

        </section>



        </main>

    );
    
}