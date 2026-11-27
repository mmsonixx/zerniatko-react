export const RegistrationForm = () => (
  <section className="registrationForm">
    <h2 className="registrationForm__title">Реєстрація</h2>

    <form className="registrationForm__form">
      <label className="registrationForm__label" htmlFor="registerName">
        Ім'я*
      </label>

      <input
        className="registrationForm__input"
        id="registerName"
        type="text"
        placeholder="Ваше ім'я"
        required
      />

      <label className="registrationForm__label" htmlFor="registerPhone">
        Номер телефону*
      </label>

      <input
        className="registrationForm__input"
        id="registerPhone"
        type="tel"
        placeholder="+38 (0__) ___-__-__"
        required
      />

      <label className="registrationForm__label" htmlFor="registerPassword">
        Пароль*
      </label>

      <input
        className="registrationForm__input"
        id="registerPassword"
        type="password"
        placeholder="Створіть пароль"
        required
      />

      <button className="registrationForm__button" type="submit">
        Зареєструватися
      </button>
    </form>
  </section>
);
