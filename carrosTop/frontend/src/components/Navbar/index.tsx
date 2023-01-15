import './styles.css'
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Top Cars</h4>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/catalog" activeClassName="active">CATALOG</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
}
export default Navbar;