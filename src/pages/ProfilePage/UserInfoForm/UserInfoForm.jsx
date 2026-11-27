export const UserInfoForm = () => (
  <form className="userInfoForm">
    <label className="userInfoForm__label" htmlFor="profileName">
      Імʼя*
    </label>
    <input
      className="userInfoForm__input"
      id="profileName"
      type="text"
      placeholder="Ваше імʼя"
      required
    />

    <label className="userInfoForm__label" htmlFor="profileSurname">
      Прізвище
    </label>
    <input
      className="userInfoForm__input"
      id="profileSurname"
      type="text"
      placeholder="Ваше прізвище"
    />

    <label className="userInfoForm__label" htmlFor="profilePhone">
      Номер телефону*
    </label>
    <input
      className="userInfoForm__input"
      id="profilePhone"
      type="tel"
      placeholder="+38 (0__) ___-__-__"
      required
    />

    <label className="userInfoForm__label" htmlFor="profileCity">
      Місто доставки*
    </label>
    <input
      className="userInfoForm__input"
      id="profileCity"
      type="text"
      placeholder="Ваше місто"
      required
    />

    <label className="userInfoForm__label" htmlFor="profileBranch">
      Номер відділення Нової Пошти*
    </label>
    <input
      className="userInfoForm__input"
      id="profileBranch"
      type="text"
      placeholder="1"
      required
    />

    <button className="userInfoForm__button" type="submit">
      Зберегти зміни
    </button>
  </form>
);
