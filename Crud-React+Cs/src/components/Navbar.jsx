import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

  return (
    <>
      <div className='container-navbar'>
        <nav className="navbar">
          <div>
            <img className="logo-home" src="./img/LogoCs.png" alt="Logo" onClick={() => window.location.href = "https://learn.microsoft.com/en-us/dotnet/csharp/"}/>
          </div>
          <div className="buttons-container">
            <Link to={"/cadastro"}>cadastro</Link>
            <Link to={"/login"}>Login</Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;