import Footer from "../components/Footer";
import Hero from "../components/home/hero";
import Services from "../components/home/Services";
import VideoShowcase from "../components/home/VideoShowcase";
const Home = () => {
  return (
    <div>
      <Hero />
      <VideoShowcase />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
