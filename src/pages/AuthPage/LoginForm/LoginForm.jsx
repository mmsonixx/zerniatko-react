export const LoginForm = () => (
  <section className="loginForm">
    <h2 className="loginForm__title">Вхід</h2>

    <form className="loginForm__form">
      <label className="loginForm__label" htmlFor="loginPhone">
        Номер телефону*
      </label>

      <input
        className="loginForm__input"
        id="loginPhone"
        type="tel"
        placeholder="+38 (0__) ___-__-__"
        required
      />

      <label className="loginForm__label" htmlFor="loginPassword">
        Пароль*
      </label>

      <input
        className="loginForm__input"
        id="loginPassword"
        type="password"
        placeholder="Введіть пароль"
        required
      />

      <button className="loginForm__button" type="submit">
        Увійти
      </button>
    </form>
  </section>
);
