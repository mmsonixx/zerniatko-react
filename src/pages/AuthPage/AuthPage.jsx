import { LoginForm } from "./LoginForm/LoginForm";
import { RegistrationForm } from "./RegistrationForm/RegisterForm";
import LogoIcon from "../../assets/icons/logo.svg";

export const AuthPage = () => {
  return (
    <main className="authPage">
      <a href="/" className="LoginForm__logo">
        <img src={LogoIcon} alt="Coffee" className="LoginForm__logo-icon" />
      </a>

      <section className="authPage__container">
        <h2 className="authPage__title">Особистий кабінет</h2>

        <div className="authPage__tabs">
          <input
            className="authPage__radio"
            type="radio"
            name="auth"
            id="login"
            defaultChecked
          />
          <label className="authPage__tab" htmlFor="login">
            Вхід
          </label>

          <input
            className="authPage__radio"
            type="radio"
            name="auth"
            id="register"
          />
          <label className="authPage__tab" htmlFor="register">
            Реєстрація
          </label>
        </div>

        <div className="authPage__forms">
          <div className="authPage__login">
            <LoginForm />
          </div>

          <div className="authPage__registration">
            <RegistrationForm />
          </div>
        </div>
      </section>
    </main>
  );
};
