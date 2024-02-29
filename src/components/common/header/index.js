

import Button from '../button';
import '../header/style.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()
  function toggleTheme(){
    document.body.classList.toggle("dark")
  }
  return (
    <header className="header">
      <div><h1>CryptoTracker</h1></div>
      <div className='header-list'>
        <ul>
            <li className="material-symbols-outlined" onClick={toggleTheme}>toggle_on</li>
            <li onClick={()=>navigate('/')}>Home</li>
            <li>Compare</li>
            <li>Whatchlist</li>
            <li><Button content="Dashboard" onClick={()=>navigate('/dashboard')}/></li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
