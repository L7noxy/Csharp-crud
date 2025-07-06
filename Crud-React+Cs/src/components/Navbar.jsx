import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <div className='container-navbar'>
        <nav className="navbar">
          <div className="buttons-container">
            {/* <Link to={'./login'} className="btn login">Login</Link>
            <button onClick={() => setModalOpen(true)} className="btn signup">Cadastro</button>

            <Link to={'./login'} className="btn login">Login</Link>
            <button onClick={() => setModalOpen(true)} className="btn signup">Cadastro</button> */}
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;