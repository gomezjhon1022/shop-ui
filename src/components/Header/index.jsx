import './Header.css'

import iconCart from '../../assets/icon_shopping_cart.svg';

function Header(){
  return (
  <header className='header'>
    <nav className='nav'>
      <div className='navbar-left'>
        <ul>
            <li className='navbar-item'>
              <a>All
              </a>
            </li>
            <li className='navbar-item'>
              <a>Electronics
              </a>
            </li>
            <li className='navbar-item'>
              <a>Clothes
              </a>
            </li>
            <li className='navbar-item'>
              <a>Furniture
              </a>
            </li>
            <li className='navbar-item'>
              <a>Personal care
              </a>
            </li>
            <li className='navbar-item'>
              <a>Others
              </a>
            </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ul>
          <li className='navbar-email'>jhon@mail.com</li>
          <li className='iconCart'>
            <img src={iconCart} alt='shopping cart' />
            <div>5</div>
          </li>
        </ul>
      </div>

    </nav>
  </header>
)
}

export { Header }