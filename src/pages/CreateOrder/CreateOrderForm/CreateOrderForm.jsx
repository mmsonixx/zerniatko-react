export const CreateOrderForm = () => (
  <section className="createOrderForm">
    <h2 className="createOrderForm__title">Особиста інформація</h2>

    <form className="createOrderForm__form">
      <label className="createOrderForm__label" htmlFor="firstName">
        Імʼя*
      </label>
      <input
        className="createOrderForm__input"
        id="firstName"
        type="text"
        placeholder="Ваше імʼя"
        required
      />

      <label className="createOrderForm__label" htmlFor="lastName">
        Прізвище
      </label>
      <input
        className="createOrderForm__input"
        id="lastName"
        type="text"
        placeholder="Ваше прізвище"
      />

      <label className="createOrderForm__label" htmlFor="phone">
        Номер телефону*
      </label>
      <input
        className="createOrderForm__input"
        id="phone"
        type="tel"
        placeholder="+38 (0__) ___-__-__"
        required
      />

      <label className="createOrderForm__label" htmlFor="city">
        Місто доставки*
      </label>
      <input
        className="createOrderForm__input"
        id="city"
        type="text"
        placeholder="Ваше місто"
        required
      />

      <label className="createOrderForm__label" htmlFor="branch">
        Номер відділення Нової Пошти*
      </label>
      <input
        className="createOrderForm__input"
        id="branch"
        type="text"
        placeholder="1"
        required
      />

      <label className="createOrderForm__label" htmlFor="comment">
        Коментар
      </label>
      <textarea
        className="createOrderForm__textarea"
        id="comment"
        placeholder="Введіть ваш коментар"
        rows={4}
      />

      <button className="createOrderForm__button" type="submit">
        Оформити замовлення
      </button>
    </form>
  </section>
);
