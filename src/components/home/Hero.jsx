import HeroPic from "../../assets/HeroPicture.png";
import Navbar from "../Navbar";
const Hero = () => {
  return (
    <section
      id="HeroSection"
      className="bg-linear-to-br sm:from-black sm:via-blue sm:to-black py-20"
    >
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:mt-20 lg:mt-10 text-white tracking-wider">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-0 items-center">
          <div className="text-center lg:text-left">
            <div className="lg:mb-8 sm:mb-0">
              <h1 className="lg:text-4xl sm:text-2xl font-bold mb-6">
                Financial Clarity, Wherever Life Takes You
              </h1>
              <p className="lg:text-xl sm:text-lg text-gray-200 mb-8 leading-relaxed">
                Personalized financial advice for expats navigating{" "}
                <span className="text-gold">
                  investments, taxes, and long-term planning across borders.
                </span>
              </p>
              <button className="bg-gold px-8 py-4 rounded-lg hover:bg-gold/80 transition colors lg:text-2xl sm:text-lg font-semibold cursor-pointer">
                Schedule a Call
              </button>
            </div>
          </div>
          <div>
            <img
              src={HeroPic}
              className="rounded-2xl shadow-2xl origin-right lg:scale-75 sm:scale-50 sm:origin-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
