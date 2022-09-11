import '../genero/index.scss'
import Barra from '../../components/menu'


export default function Index() {



    return(
        <main className='genero'>
            <Barra/>
        <section className='container'>

        <div className='coracao'>
            
            <div className='a'>
            <img src='./images/coração-2.png' alt='amor'/>
            <h1>Romance</h1>
            </div>

            <div className='a'>
            <img src='./images/fantasma.png' alt='fantasma'/>
            <h1>Terror</h1>
            </div>

            <div className='a'>
            <img src='./images/bebe.png' alt='criança'/>
            <h1>Infantil</h1>    
            </div>

            <div className='a'>
            <img src='./images/aventura.png' alt='aventura' />
            <h1>Aventura</h1>
            </div>

            <div className='a'>
                <img src='./images/espada.png' alt='espada' />
                <h1>Ação</h1>
            </div>

            <div className='a'>
                <img src='./images/assustou.png' alt='assusta' />
                <h1>Sobrenatural</h1>
            </div>

            <div className='a'>
                <img src='./images/palhaço.png' alt='palhaço' />
                <h1>Comédia</h1> 
            </div>

        </div>

        <div className='linha2'>


            <div className='a'>
                <img src='./images/drama.png' alt='drama' />
                <h1>Drama</h1>
            </div>


            <div className='a'>
                <img src='./images/cara.png' alt='cara' />
                <h1>Ecchi</h1>
            </div>


            <div className='a'>
                <img src='./images/escola.png' alt='escola' />
                <h1>Escola</h1>
            </div>


            <div className='a'>
                <img src='./images/mapa.png' alt='mapa' />
                <h1>Shounen</h1>
            </div>


            <div className='a'>
                <img src='./images/pensador.png' alt='pensar' />
                <h1>Slice Of Life</h1>
            </div>


            <div className='a'>
                <img src='./images/agua.png' alt='ciencia' />
                <h1>Ficção <br/> científica</h1>
            </div>

            <div className='a'>
                <img src='./images/controler.png' alt='controler' />
                <h1>Jogo</h1>
            </div>

        </div>

        </section>

        </main>
    );
    
}