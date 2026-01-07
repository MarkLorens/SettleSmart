import HeroPic from "../../assets/HeroPicture.png";
import Navbar from "../Navbar";
const Hero = () => {
  return (
    <section
      id="HeroSection"
      className="bg-linear-to-br from-black via-blue to-black py-1 -mt-10 max-h-full"
    >
      <Navbar />
      <div className="max-w-7xl mx-auto text-white tracking-wider">
        <div className="grid lg:grid-cols-2 sm:gap-0 justify-between items-center lg:mt-10 sm:mt-50">
          <div className="text-center lg:text-left">
            <div className="lg:mb-8">
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
              className="rounded-2xl shadow-2xl scale-60 sm:-mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
