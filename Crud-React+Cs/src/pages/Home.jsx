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
            </div>


            <div class="glass-card">

                <h1>Bem-vindo ao meu site</h1>
                <p>Texto sobreposto ao vídeo de fundo</p>
            </div>
        </div>
    )
}
