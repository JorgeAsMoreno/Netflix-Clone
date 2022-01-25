import React, {useEffect , useState} from "react";
import './Navbar.css'

const Navbar = () => {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <div className="nav__links">
        <img
          alt="Netflix logo"
          className="nav__logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
        />
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Peliculas</a></li>
          <li><a href="/">Series</a></li>
          <li><a href="/">Novedades Populares</a></li>
          <li><a href="/">Mi Lista</a></li>
        </ul>
      </div>
      <div className="nav__options">
        <ul>
          <li><a href="/"><i class="fas fa-search"></i></a></li>
          <li><a href="/">Niños</a></li>
          <li><a href="/"><i class="fas fa-bell" /></a></li>
        </ul>
        <img
          alt="Avatar Logo"
          className="nav__avatar"
          src="https://i.pinimg.com/474x/5d/0f/9c/5d0f9ca26f942f0eda69ffd4dc1710dc.jpg"
        />
      </div>
    </nav>
  )
}

export default Navbar
