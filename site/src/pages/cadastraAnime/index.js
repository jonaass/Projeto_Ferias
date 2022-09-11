import '../cadastraAnime/index.scss';
import Barra from '../../components/menu'


export default function Index() {
    

    return (
        <main className='page page-cadastrar'>
            <Barra />
            <div className='container'>
              
                
                <div className='conteudo'>
                    <section>
                        <h1 className='titulo'><span>&nbsp;</span> Cadastrar Novo Aime</h1>

                        <div className='form-colums'>
                            <div>
                                <div className='upload-capa'>
                                    <img src="./images/imagem-2.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <div className='form-row'>
                                    <label>Nome:</label>
                                    <input type='text' placeholder='Nome do Anime' />
                                </div>
                                <div className='form-row'>
                                    <label>Episódios:</label>
                                    <input type='number' placeholder='0' />
                                </div>
                                <div className='esquerda'>
                                    <label>Gênero:</label>
                                    <input type='text'placeholder='Gênero do Anime' />
                                </div>
                                <br />
                                <div className='esquerda'>
                                    <label>Estúdio:</label>
                                    <input type='text' />
                                </div>
                            </div>
                            <div>
                                <div className='form-row' style={{alignItems: 'flex-start'}}>
                                    <label style={{marginTop: '13px'}}>Sinopse:</label>
                                    <textarea placeholder='Sinopse do Anime' />
                                </div>
                                <br />
                                <br />
                                <div className='form-row'>
                                    <label></label>
                                    <div className='btnSalvar'>
                                        <button>SALVAR</button>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}