

import Button from '../button';
import '../header/style.css'

const Header = () => {

  function toggleTheme(){
    document.body.classList.toggle("dark")
  }
  return (
    <header className="header">
      <div><h1>CryptoTracker</h1></div>
      <div className='header-list'>
        <ul>
            <li className="material-symbols-outlined" onClick={toggleTheme}>toggle_on</li>
            <li>Home</li>
            <li>Compare</li>
            <li>Whatchlist</li>
            <li><Button content="Dashboard"/></li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
