import { Link } from 'react-router-dom';
import logo from '../../imgs/wht_tempr_button.png';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="TEMPR.GG" style={{ height: 44 }} />
        </Link>
        <nav>
          <Link to="/news">News</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/media">Media</Link>
          <Link to="/shop">Shop</Link>
        </nav>
      </div>
    </header>
  );
}
