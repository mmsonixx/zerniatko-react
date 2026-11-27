import { Container } from "../../../components/Container/Container";
import { ReviewsList } from "../../../components/ReviewsList/ReviewsList";
export const LastReviews = () => (<section className="lastReviews">
<Container>
    <h2 className="lastReviews__title">Останні відгуки</h2>
    <ReviewsList/>
</Container>
</section>);