import { Container } from "../../components/Container/Container";
import { CategoriesList } from "../../components/CategoriesList/CategoriesList";
import { LoadMoreButton } from "../../components/Button/LoadMoreButton/LoadMoreButton";
export const CategoriesPage = () => (<section className="CategoriesPage">
<Container>
    <h2 className="categoriesPage__title">Категорії</h2>
<CategoriesList/>
<LoadMoreButton/>
</Container>
</section>);