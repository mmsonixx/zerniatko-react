import { Container } from "../../components/Container/Container";
import { GoodsOrderList } from "../../components/GoodsOrderList/GoodsOrderList";
import { CreateOrderForm } from "./CreateOrderForm/CreateOrderForm";
export const CreateOrder = () => (
  <section className="createOrder">
    <Container>
      <h2 className="createOrder__title">Оформити замовлення</h2>
      <GoodsOrderList />
      <CreateOrderForm />
    </Container>
  </section>
);
