import HeroPic from "../../assets/HeroPicture.png";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <section
      id="HeroSection"
      className="bg-[url('src/assets/SettleSmartBG.png')] bg-cover py-20"
    >
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 mt-20 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-seconday mb-6">
                Financial Clarity, Wherever Life Takes You
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Personalized financial advice for expats navigating{" "}
                <span className="text-gold">
                  investments, taxes, and long-term planning across borders.
                </span>
              </p>
              <button className="bg-gold px-8 py-4 rounded-lg hover:bg-gold/80 transition colors text-2xl font-semibold cursor-pointer">
                Schedule a Call
              </button>
            </div>
          </div>
          <div>
            <img
              src={HeroPic}
              className="h-auto w-full max-h-128 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
