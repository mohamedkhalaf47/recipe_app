import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { storeContext } from '../../Context/ShopContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCart} = useContext(storeContext)

  return (
    <div className='navbar'>
      <Link to={'/'}><img src={assets.logo} alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to={'/'} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#exploreMenu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#appDownload' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCart() == 0 ? "":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
