import { Container } from "../../components/Container/Container";
import { CategoriesFilter } from "./CategoriesFilter/CategoriesFilter";
import { GoodsList } from "../../components/GoodsList/GoodsList";
export const GoodsPage = () => (<section className="goodsPage">
<Container>
<CategoriesFilter/>
<GoodsList/>
</Container>
</section>);