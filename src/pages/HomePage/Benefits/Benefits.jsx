import { Container } from "../../components/Container/Container";
import { FiSun } from "react-icons/fi";
import { MdOutlineCoffee, MdOutlineCalendarToday  } from "react-icons/md";
export const Benefits = () => (<section className="benefits">
    <Container>
<h2 className="benefits__title">Чому варто обрати Зернятко?</h2>
<ul className="benefits__list">
    <li className="benefits__item">
        <FiSun/>
        <h3 className="benefits__item-title">Смак і якість</h3>
        <p className="benefits__info">Лише відібрані кавові зерна та товари від перевірених виробників.</p>
    </li>
    <li className="benefits__item">
    <MdOutlineCoffee />
        <h3 className="benefits__item-title">Усе для кавового ритуалу</h3>
        <p className="benefits__info">Від турки до кавомолки — ми зібрали повний набір для ідеальної чашки.</p>
    </li>
    <li className="benefits__item">
        <MdOutlineCalendarToday />
        <h3 className="benefits__item-title">Натхнення щодня</h3>
        <p className="benefits__info">Кава, яка підкреслить твій настрій та стане головною частиною ранкової звички.</p>
    </li>
</ul>
    </Container>
</section>);