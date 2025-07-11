import React from 'react'
import './Cadastro.css'

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="cadastro-left">
        <img src='./img/LogoCs.png' alt="Logo da Empresa" className="logo" />
        <video autoplay muted loop playsinline class="video-bg-cad">
          <source src="./video/background.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo HTML5.
        </video>
      </div>

      <div className="cadastro-right">
        <h2>Crie sua conta</h2>
        <form>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" required />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
