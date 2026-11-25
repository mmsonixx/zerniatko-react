import { Container } from "../../components/Container/Container";
import { Hero } from "./Hero/Hero";
import { Benefits } from "./Benefits/Benefits";
export const HomePage = () => (
  <section className="homePage">
    <Container>
      <Hero />
      <Benefits />
    </Container>
  </section>
);
