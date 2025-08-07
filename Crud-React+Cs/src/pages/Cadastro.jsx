import React from 'react'
import './Cadastro.css'

export default function Cadastro() {

  const [formData, setFormData] = useState({ nome: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/Usuario/criar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
  };

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
