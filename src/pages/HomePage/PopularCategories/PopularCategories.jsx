import { Container } from "../../../components/Container/Container";
import { CategoriesList } from "../../../components/CategoriesList/CategoriesList";
export const PopularCategories = () => (<section className="popularCategories">
<Container>
    <h2 className="popularCategories__title">Популярні категорії</h2>
    <button className="popularCategories__button">Всі категорії</button>
    <CategoriesList/>
</Container>
</section>);