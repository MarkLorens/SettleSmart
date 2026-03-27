import Navbar from "../Navbar";
import HeroPic from "../../assets/about/AboutHeroPicture.png";

const Hero = () => {
  return (
    <section
      id="HeroSection"
      className="bg-linear-to-br from-blue via-[#325092] to-blue text-white py-24 flex items-center"
    >
      <Navbar />
      <div className="max-w-7xl mx-auto mt-20 px-6 w-full tracking-wider">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className=" inline-block bg-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i class="fa-solid fa-user-tie mr-2"></i>
              About Sion
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-light">
              Empowering Expats to Financial Freedom.
            </h1>
            <p className="text-xl leading-relaxed font-extralight font-montserrat">
              From struggling expat to trusted advisor - helping you avoid the
              mistakes I made.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src={HeroPic} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
