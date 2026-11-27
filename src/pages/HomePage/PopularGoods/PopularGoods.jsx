import { Container } from "../../../components/Container/Container";
import { GoodsList } from "../../../components/GoodsList/GoodsList";
export const PopularGoods = () => (<section className="popularGoods">
<Container>
    <h2 className="popularGoods__title">Популярні товари</h2>
    <button className="popularGoods__button">Всі товари</button>
<GoodsList/>
</Container>
</section>);