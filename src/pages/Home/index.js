import Logo from '../../img/logo.svg'

import './styles.css'

const Home = ()=>{
    return(
        <main className='container-home'>
            <img src={Logo} alt="Logo" />

            <div>
                <h1>Título</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button>Acessar</button>
            </div>
        </main>
    )
}

export default Home;