export const GoodInfo = ({ good }) => {
  return (
    <li className="good__item">
      <div className="good__item-image-wrapper">
        <img
          className="good__item-image"
          src={good.image}
          alt={good.name}
        />
      </div>

      <div className="good__item-content">
        <p className="good__item-rating">
          ★★★★★
          <span>{good.rate}</span>
        </p>

        <h3 className="good__item-title">
          {good.name}
        </h3>

        <p className="good__item-description">
          {good.info}
        </p>

        <p className="good__item-price">
          {good.price.prefix} {good.price.value} {good.price.currency}
        </p>

        <button className="good__item-button">
          Детальніше
        </button>
      </div>
    </li>
  );
};