import goodsData from "../../../data/coffee.json";
import { MessageNoInfo } from "../../../components/MessageNoInfo/MessageNoInfo";

export const GoodForPurchase = ({ goodId }) => {
  const good = goodsData.find(
    (item) => item._id.$oid === goodId
  );

  if (!good) {
    return (
      <section className="product">
        <MessageNoInfo />
      </section>
    );
  }

  return (
    <section className="product">
      <div className="product__container">
        <div className="product__image-wrapper">
          <img
            src={good.image}
            alt={good.name}
            className="product__image"
          />
        </div>

        <div className="product__details">
          <nav className="product__breadcrumbs" aria-label="Хлібні крихти">
            <span className="product__breadcrumb">Всі товари</span>
            <span className="product__separator">›</span>
            <span className="product__breadcrumb">
              {good.category?.$title}
            </span>
            <span className="product__separator">›</span>
            <span className="product__breadcrumb product__breadcrumb--active">
              {good.name}
            </span>
          </nav>

          <h2 className="product__title">{good.name}</h2>

          <div className="product__price-rating">
            <span className="product__price">
              {good.price?.prefix} {good.price?.value}{" "}
              {good.price?.currency}
            </span>

            <div className="product__rating">
              <span className="product__stars">★★★★★</span>
              <span className="product__rating-value">
                ({good.rate})
              </span>
            </div>
          </div>

          <div className="product__description">
            <p className="product__info">{good.info}</p>
            <p className="product__text">{good.description}</p>
          </div>

          <div className="product__actions">
            <div className="product__cart-row">
              <button
                type="button"
                className="product__button product__button--primary"
              >
                Додати в кошик
              </button>

              <input
                type="number"
                className="product__quantity"
                defaultValue={1}
                min={1}
                aria-label="Кількість"
              />
            </div>

            <button
              type="button"
              className="product__button product__button--secondary"
            >
              Купити зараз
            </button>
          </div>

          <p className="product__shipping">
            Безкоштовна доставка для замовлень від 1000 грн
          </p>
        </div>
      </div>
    </section>
  );
};