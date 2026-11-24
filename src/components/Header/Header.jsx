import { Container } from "../Container/Container";
import CoffeeIcon from "../../assets/icons/coffee_maker.svg";
import CartIcon from "../../assets/icons/shopping_cart.svg";
export const Header = () => (
  <header>
    <Container>
      <div className="header__container">
        <a href="/" className="header__logo">
          <img src={CoffeeIcon} alt="Coffee" className="header__logo-icon" />
          Зернятко
        </a>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Головна
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Товари
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Категорії
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          <a href="/login" className="header__login">
            Вхід
          </a>

          <a href="/register" className="header__register">
            Реєстрація
          </a>

          <a href="/cart" className="header__cart">
            <img src={CartIcon} alt="Кошик" />
          </a>
        </div>
      </div>
    </Container>
  </header>
);
