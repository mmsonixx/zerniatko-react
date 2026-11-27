import { Container } from "../../../components/Container/Container";
import { ReviewsList } from "../../../components/ReviewsList/ReviewsList";
export const GoodReviews = () => (
  <section className="goodReviews">
    <Container>
      <h2 className="goodReviews__title">Відгуки клієнтів</h2>
      <button className="goodReviews__button">Залишити відгук</button>
      <ReviewsList />
    </Container>
  </section>
);
