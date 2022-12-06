import './index.scss'

const Animes = (props) =>{

    return (
        <main className='categoria'>

            <div className='animes'>

                <div className='Mob'>
                        <img src={props.img} alt='Mob' className='capa' />
                    <h1 >{props.nome}</h1>
                </div>

            </div>

        </main>
    );


}

export default Animes