import React from 'react'

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src="./assets/logo.png" alt="Logo da Empresa" className="logo" />
      </div>

      <div className="login-right">
        <h2 className="login-title">Entrar na sua conta</h2>
        <form className="login-form">
          <label htmlFor="email" className="login-label">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            className="login-input"
            required
          />

          <label htmlFor="senha" className="login-label">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            className="login-input"
            required
          />

          <button type="submit" className="login-button">Entrar</button>
        </form>

        <p className="login-footer">
          Não tem uma conta? <a href="/cadastro" className="login-link">Cadastre-se</a>
        </p>
      </div>
    </div>
    )
}
