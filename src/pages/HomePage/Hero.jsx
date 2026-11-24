import { Container } from "../../components/Container/Container";
import HeroImage from "../../assets/img/hero-coffee.webp";
export const Hero = () => (
  <section className="hero">
    <Container>
      <h1 className="hero__title">Зернятко — твій шлях до справжньої кави</h1>
      <p className="hero__description">
        Ми створили місце, де кожен знайде все для свого кавового ритуалу: від
        зерен преміум-якості до стильних аксесуарів для приготування. Почни день
        із натхнення та бадьорих вражень, що розкривають унікальний смак твоєї
        кави.
      </p>
      <div className="hero__actions">
        <a href="/" className="hero__button">
          До товарів
        </a>

        <a href="/" className="hero__button hero__button-secondary">
          Дослідити категорії
        </a>
      </div>
      <div className="hero__image">
        <img src={HeroImage} alt="Кавові зерна, кавомолка та турка" />
      </div>
    </Container>
  </section>
);
