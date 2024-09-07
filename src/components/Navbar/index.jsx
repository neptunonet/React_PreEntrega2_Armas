import logo from '../../assets/logo.webp';
import CartWidget from '../CartWidget';
import ItemList from '../ItemList';


const Navbar = () => {
  return (
   <header className="header">
        <nav className="navbar container">
            <figure className="navbar__logo"> 
                <img src={ logo } alt="" />
            </figure>
            <menu className="navbar__menu">
                    <ItemList label="Home"/>
                    <ItemList label="Contacto"/>
                    <ItemList label="Shop"/>
                    <li><a className='navbar__link' href=""><CartWidget quantity={0}/> </a></li>
            </menu>
        </nav>
   </header>
  );
}
export default Navbar;