import AboutCTA from "../components/about/AboutCTA";
import CompanyValues from "../components/about/CompanyValues";
import Hero from "../components/about/Hero";
import Story from "../components/about/Story";
import TrackRecord from "../components/about/TrackRecord";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Hero />
      <Story />
      <TrackRecord />
      <CompanyValues />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;
