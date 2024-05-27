import Books from "../../components/books";
import Content from "../../components/content";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Container from "../../container";

const Featured = () => {
  return (
    <Container>
      <Navbar />
      <Content
        title="Books"
        subtitle="Discover the best books recommended by the most successful and interesting people in the world."
      />
      <Books />
      <Footer />
    </Container>
  );
};

export default Featured;
