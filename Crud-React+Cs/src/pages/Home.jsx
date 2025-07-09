import Navbar from '../components/Navbar'
import './Home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <div className='nav-home'>
                <Navbar />
            </div>
            <div>
                <video autoplay muted loop playsinline class="video-bg">
                    <source src="./video/background.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo HTML5.
                </video>
                <div class="glass-card">
                    <h1>Bem-vindo ao meu site</h1>
                    <p>Esse site foi feito para treinar e aprender a fazer um CRUD em C#</p>
                    <p>nesse site voce pode criar, editar e deletar um usuario</p>
                </div>

            </div>
            <div className='informacoes-home'>
                <p>Desenvolvido por: <a href="https://github.com/L7noxy" className='link-git' target="_blank">Gabriel da Cunha</a></p>
            </div>
        </div>
    )
}
