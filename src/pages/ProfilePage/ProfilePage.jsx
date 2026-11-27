import { MessageNoOrders } from "./MessageNoOrders/MessageNoOrders";
import { UserInfoForm } from "../ProfilePage/UserInfoForm/UserInfoForm";

export const ProfilePage = () => {
  const orders = [];

  return (
    <section className="profilePage">
      <h1 className="profilePage__title">Кабінет</h1>

      <section className="profilePage__orders">
        <h2 className="profilePage__heading">Замовлення</h2>

        <h3 className="profilePage__subtitle">Мої замовлення</h3>

        {orders.length === 0 ? (
          <MessageNoOrders />
        ) : (
          <ul className="profilePage__orders-list">
            {orders.map((order) => (
              <li className="profilePage__orders-item" key={order.id}>
                <span>{order.date}</span>
                <span>{order.number}</span>
                <span>{order.amount}</span>
                <span>{order.status}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="profilePage__information">
        <h2 className="profilePage__heading">Особиста інформація</h2>

        <UserInfoForm />
      </section>

      <button className="profilePage__logout" type="button">
        Вийти з кабінету
      </button>
    </section>
  );
};
