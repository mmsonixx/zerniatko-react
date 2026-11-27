import { Container } from "../../components/Container/Container";
import { Hero } from "./Hero/Hero";
import { Benefits } from "./Benefits/Benefits";
import { LastReviews } from "./LastReviews/LastReviews";
import { PopularGoods } from "./PopularGoods/PopularGoods";
import { PopularCategories } from "./PopularCategories/PopularCategories";
export const HomePage = () => (
  <section className="homePage">
    <Container>
      <Hero />
      <PopularGoods />
      <Benefits />
      <PopularCategories/>
      <LastReviews />
    </Container>
  </section>
);
