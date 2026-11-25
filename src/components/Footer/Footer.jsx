import { Container } from "../Container/Container";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import LogoIcon from "../../assets/icons/logo.svg";
export const Footer = () => (
  <footer>
    <Container>
      <div className="footer__container">
        <a href="/" className="footer__logo">
          <img src={LogoIcon} alt="Coffee" className="footer__logo-icon" />
        </a>
        <div className="footer__navigation">
          <h3 className="footer__heading">Меню</h3>

          <ul className="footer__list">
            <li>
              <a href="/">Головна</a>
            </li>
            <li>
              <a href="#products">Товари</a>
            </li>
            <li>
              <a href="#categories">Категорії</a>
            </li>
          </ul>
        </div>

        <div className="footer__subscribe">
          <h3 className="footer__heading">Підписатися</h3>

          <p className="footer__description">
            Приєднуйтесь до нашої розсилки, щоб бути в курсі новинок та акцій.
          </p>

          <form className="footer__form">
            <input
              className="footer__input"
              type="email"
              placeholder="Введіть ваш email"
              aria-label="Ваш email"
            />

            <button className="footer__button" type="submit">
              Підписатися
            </button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          © 2025 Зернятко. Всі права захищені.
        </p>

        <div className="footer__socials">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook />
          </a>
          <a  href="https://www.instagram.com/" target="_blank" >
            <FaInstagram />
          </a>
          <a href="https://x.com/" target="_blank">
            <FaXTwitter />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FaYoutube />
          </a>
        </div>
      </div>
    </Container>
  </footer>
);
