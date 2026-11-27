import { RiDeleteBin6Line } from "react-icons/ri";
export const GoodsOrderList = () => (
  <>
    {" "}
    <ul className="goodsOrder__list">
      <li className="goodsOrder__item">
        <img
          className="goodsOrder__image"
          src="https://placehold.co/100x100"
          alt="Кава"
        />

        <div className="goodsOrder__info">
          <h3 className="goodsOrder__name">Кава в зернах Lavazza</h3>

          <div className="goodsOrder__rating">
            <span className="goodsOrder__stars">★★★★★</span>
            <p className="goodsOrder__reviews">(24 відгуки)</p>
          </div>
        </div>

        <p className="goodsOrder__price">850 ₴</p>

        <button
          className="goodsOrder__remove"
          type="button"
          aria-label="Видалити товар"
        >
          <RiDeleteBin6Line />
        </button>
      </li>
    </ul>
    <div className="goodsOrder__summary">
      <div className="goodsOrder__summary">
        <p>Проміжний підсумок</p>
        <p>1270 ₴</p>
      </div>

      <div className="goodsOrder__summary">
        <p>Доставка</p>
        <p>80 ₴</p>
      </div>

      <div className="goodsOrder__summary-total">
        <p>Всього</p>
        <p>1350 ₴</p>
      </div>
    </div>
  </>
);
