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
            <a href="">cadastro</a>
            <a href="">Login</a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;