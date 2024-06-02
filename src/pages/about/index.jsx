import Content from "../../components/content";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Container from "../../container";

const About = () => {
  return (
    <Container>
      <Navbar />
      <Content
        title="About"
        subtitle="This website has been created by Zharifah with the aim of helping users to search for books according to their preferences and desires."
      />
      <Footer />
    </Container>
  );
};

export default About;
