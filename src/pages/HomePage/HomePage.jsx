import { Container } from "../../components/Container/Container";
import { Hero } from "./Hero";
import { Benefits } from "./Benefits";
export const HomePage = () => (
  <section className="homePage">
    <Container>
      <Hero />
      <Benefits />
    </Container>
  </section>
);
