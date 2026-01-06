import Footer from "../components/Footer";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/hero";
import Services from "../components/home/Services";
import VideoShowcase from "../components/home/VideoShowcase";
const Home = () => {
  return (
    <div>
      <Hero />
      <VideoShowcase />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
