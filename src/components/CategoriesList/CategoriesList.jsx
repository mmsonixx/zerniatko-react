import Capsulecoffee from "../../assets/img/categories/capsule-coffee.webp";
import CoffeeBeans from "../../assets/img/categories/coffee-beans.webp";
import CoffeEMakers from "../../assets/img/categories/сoffee-makers-and-accessories.webp";
import FiltersConsumables from "../../assets/img/categories/filters-and-consumables.webp";
import GroundCoffee from "../../assets/img/categories/ground-coffee.webp";
import GadgetsBaristas from "../../assets/img/categories/gadgets-for-baristas.webp";
import CupsThermoses from "../../assets/img/categories/cups-and-thermoses.webp";
import InstantCoffee from "../../assets/img/categories/instant-coffee.webp";
import SyrupsAdditives from "../../assets/img/categories/syrups-and-additives.webp";
import GiftSets from "../../assets/img/categories/gift-sets.webp";
import CoffeeStorage from "../../assets/img/categories/coffee-storage.webp";
import CookiesSweets from "../../assets/img/categories/cookies-and-sweets.webp";
export const CategoriesList = () => (<>
<ul className="categories__list">
    <li className="categories__item">
        <img src={CoffeeBeans} alt="Кава в зернах" className="categories__img" />
        <h3 className="categories__title">Кава в зернах</h3>
        <p className="categories__info">Арабіка, робуста, бленди та моносорти для різних способів приготування.</p>
    </li>
    <li className="categories__item">
        <img src={CoffeEMakers} alt="Кавоварки та аксесуари" className="categories__img" />
        <h3 className="categories__title">Кавоварки та аксесуари</h3>
        <p className="categories__info">Френч-преси, турки, мока-поти, пуровер-приладдя.</p>
    </li>
    <li className="categories__item">
        <img src={FiltersConsumables} alt="Фільтри та витратні матеріали" className="categories__img" />
        <h3 className="categories__title">Фільтри та витратні матеріали</h3>
        <p className="categories__info">Паперові фільтри, серветки, допоміжні дрібниці для приготування кави.</p>
    </li>
    <li className="categories__item">
        <img src={GroundCoffee} alt="Мелена кава" className="categories__img" />
        <h3 className="categories__title">Мелена кава</h3>
        <p className="categories__info">Готова до використання кава з різним ступенем помелу.</p>
    </li>
    <li className="categories__item">
        <img src={GadgetsBaristas} alt="Гаджети для бариста" className="categories__img" />
        <h3 className="categories__title">Гаджети для бариста</h3>
        <p className="categories__info">Кавомолки, ваги, чайники з «гусячою шийкою».</p>
    </li>
    <li className="categories__item">
        <img src={CupsThermoses} alt="Чашки та термоси" className="categories__img" />
        <h3 className="categories__title">Чашки та термоси</h3>
        <p className="categories__info">Термочашки, келихи для латте, класичні керамічні горнятка.</p>
    </li>
    <li className="categories__item">
        <img src={Capsulecoffee} alt="Капсульна кава" className="categories__img" />
        <h3 className="categories__title">Капсульна кава</h3>
        <p className="categories__info">Зручна кава в капсулах для вашої кавомашини.</p>
    </li>
    <li className="categories__item">
        <img src={InstantCoffee} alt="Розчинна кава" className="categories__img" />
        <h3 className="categories__title">Розчинна кава</h3>
        <p className="categories__info">Швидкий спосіб насолодитися улюбленою кавою.</p>
    </li>
    <li className="categories__item">
        <img src={SyrupsAdditives} alt="Сиропи та добавки" className="categories__img" />
        <h3 className="categories__title">Сиропи та добавки</h3>
        <p className="categories__info">Додавайте смаку у вашу каву.</p>
    </li>
    <li className="categories__item">
        <img src={GiftSets} alt="Подарункові набори" className="categories__img" />
        <h3 className="categories__title">Подарункові набори</h3>
        <p className="categories__info">Ідеальний подарунок для поціновувачів кави.</p>
    </li>
    <li className="categories__item">
        <img src={CoffeeStorage} alt="Зберігання кави" className="categories__img" />
        <h3 className="categories__title">Зберігання кави</h3>
        <p className="categories__info">Збережіть свіжість і аромат надовго.</p>
    </li>
    <li className="categories__item">
        <img src={CookiesSweets} alt="Печиво та солодощі до кави" className="categories__img" />
        <h3 className="categories__title">Печиво та солодощі до кави</h3>
        <p className="categories__info">Солодкі моменти разом із кавою.</p>
    </li>
</ul>
</>);