import React from 'react'
import './Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src='./img/LogoCs.png' alt="Logo da Empresa" className="logo" />
        <video autoplay muted loop playsinline class="video-bg-cad">
          <source src="./video/background.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo HTML5.
        </video>
      </div>

      <div className="login-right">

        <h2 className="login-title">Entrar na sua conta</h2>
        <form className="login-form">
          <label htmlFor="email" className="login-label">E-mail</label>
          <input type="email" id="email" name="email" className="login-input" required />

          <label htmlFor="senha" className="login-label">Senha</label>
          <input type="password" id="senha" name="senha" className="login-input" required />

          <button type="submit" className="login-button">Entrar</button>
        </form>

        <p className="login-footer">
          Não tem uma conta? <a href="/cadastro" className="login-link">Cadastre-se</a>
        </p>
      </div>
    </div>
  )
}
