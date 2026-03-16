import { useState } from "react";
import WorldMap from "/world.svg";

const HeatMap = () => {
  const [activeCountry, setActiveCountry] = useState(null);

  function hoverToPin(country) {}
  return (
    <section id="HeatMap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-blue mb-4 font-oswald">
            Global Expertise{" "}
            <span className="text-gold">Local Understanding</span>
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by expats from around the world.
          </p>
        </div>
        <div className="bg-linear-to-t from-blue to-blue-800 rounded-3xl p-12 shadow-2xl">
          <div className="grid gird-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Clients from Every Corner of the Globe
              </h3>
              <p className="font-montserrat text-blue-100 text-lg mb-8 leading-relaxed">
                {" "}
                My experience working with diverse international clients means I
                understand the unique financial challenges faced by expats from
                different cultural and economic backgrounds.{" "}
              </p>
              <div className="space-y-4">
                <div
                  onMouseEnter={() => setActiveCountry("india")}
                  onMouseLeave={() => setActiveCountry(null)}
                  className="flex items-center space-x-4 bg-blue-800 bg-opacity-50 rounded-xl p-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-flag text-blue-700 text-xl"></i>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold text-lg">India</div>
                    <div className="text-blue-200 text-sm">
                      Specialized in NRI financial planning
                    </div>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setActiveCountry("indonesia")}
                  onMouseLeave={() => setActiveCountry(null)}
                  className="flex items-center space-x-4 bg-blue-800 bg-opacity-50 rounded-xl p-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-flag text-blue-700 text-xl"></i>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold text-lg">Indonesia</div>
                    <div className="text-blue-200 text-sm">
                      Cross-border investment strategies
                    </div>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setActiveCountry("us")}
                  onMouseLeave={() => setActiveCountry(null)}
                  className="flex items-center space-x-4 bg-blue-800 bg-opacity-50 rounded-xl p-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-flag text-blue-700 text-xl"></i>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold text-lg">United States</div>
                    <div className="text-blue-200 text-sm">
                      US tax compliance & optimization
                    </div>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setActiveCountry("uk")}
                  onMouseLeave={() => setActiveCountry(null)}
                  className="flex items-center space-x-4 bg-blue-800 bg-opacity-50 rounded-xl p-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-flag text-blue-700 text-xl"></i>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold text-lg">United Kingdom</div>
                    <div className="text-blue-200 text-sm">
                      UK pension & savings guidance
                    </div>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setActiveCountry("sa")}
                  onMouseLeave={() => setActiveCountry(null)}
                  className="flex items-center space-x-4 bg-blue-800 bg-opacity-50 rounded-xl p-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-flag text-blue-700 text-xl"></i>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold text-lg">South America</div>
                    <div className="text-blue-200 text-sm">
                      Currency risk management
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src={WorldMap}
                  alt="World map image"
                  className="w-full h-full object-cover"
                />
                {/* India */}
                <div
                  id="IndiaPin"
                  className={`absolute w-3 h-3 bg-gold rounded-full top-[40%] left-[70%] transition-all duration-300 
                    ${activeCountry === "india" ? "w-6 h-6" : "w-3 h-3"}`}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></span>
                </div>

                {/* Indonesia */}
                <div
                  id="IndoPin"
                  className={`absolute w-3 h-3 bg-gold rounded-full top-[57%] left-[82%] transition-all duration-300
                    ${activeCountry === "indonesia" ? "w-6 h-6" : "w-3 h-3"}`}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></span>
                </div>

                {/* US */}
                <div
                  id="USPin"
                  className={`absolute w-3 h-3 bg-gold rounded-full top-[27%] left-[22%] transition-all duration-300
                    ${activeCountry === "us" ? "w-6 h-6" : "w-3 h-3"}`}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></span>
                </div>

                {/* UK */}
                <div
                  id="UKPin"
                  className={`absolute w-3 h-3 bg-gold rounded-full top-[16%] left-[47%] transition-all duration-300
                    ${activeCountry === "uk" ? "w-6 h-6" : "w-3 h-3"}`}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></span>
                </div>

                {/* South America */}
                <div
                  id="SAPin"
                  className={`absolute w-3 h-3 bg-gold rounded-full top-[65%] left-[32%] transition-all duration-300
                    ${activeCountry === "sa" ? "w-6 h-6" : "w-3 h-3"}`}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*

      <div className="relative">
        <img src={WorldMap} alt="World map showing global clients" />

        <div className="absolute w-3 h-3 bg-blue-600 rounded-full top-[40%] left-[47%]" />

        <div className="absolute w-3 h-3 bg-blue-600 rounded-full top-[50%] left-[65%]" />

        <div className="absolute w-3 h-3 bg-blue-600 rounded-full top-[45%] left-[30%]" />
      </div> */}
    </section>
  );
};

export default HeatMap;
