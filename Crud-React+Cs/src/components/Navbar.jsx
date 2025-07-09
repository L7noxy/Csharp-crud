import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

  return (
    <>
      <div className='container-navbar'>
        <nav className="navbar">
          <div>
            <img src="./img/LogoCs.png" alt="" srcset="" />
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