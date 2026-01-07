import Footer from "../components/Footer";
import ClientReview from "../components/home/ClientReview";
import CTA from "../components/home/CTA";
import FAQ from "../components/home/FAQ";
import Hero from "../components/home/hero";
import Services from "../components/home/Services";
import VideoShowcase from "../components/home/VideoShowcase";
import WorkFlow from "../components/home/WorkFlow";
const Home = () => {
  return (
    <div>
      <Hero />
      <VideoShowcase />
      <Services />
      <ClientReview />
      <WorkFlow />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
