import Footer from "../components/Footer";
import CTA from "../components/home/CTA";
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
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
