import { useState } from "react";
import WorldMap from "/world.svg";

const HeatMap = () => {
  const [activeCountry, setActiveCountry] = useState(null);
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
                  onMouseEnter={() => setActiveCountry("pakistan")}
                  onMouseLeave={() => setActiveCountry(null)}
                  className="flex items-center space-x-4 bg-blue-800 bg-opacity-50 rounded-xl p-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-flag text-blue-700 text-xl"></i>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold text-lg">Pakistan</div>
                    <div className="text-blue-200 text-sm">
                      Specialized in NRI financial planning
                    </div>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setActiveCountry("nigeria")}
                  onMouseLeave={() => setActiveCountry(null)}
                  className="flex items-center space-x-4 bg-blue-800 bg-opacity-50 rounded-xl p-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-flag text-blue-700 text-xl"></i>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold text-lg">Nigeria</div>
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
                  onMouseEnter={() => setActiveCountry("safrica")}
                  onMouseLeave={() => setActiveCountry(null)}
                  className="flex items-center space-x-4 bg-blue-800 bg-opacity-50 rounded-xl p-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-flag text-blue-700 text-xl"></i>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold text-lg">South Africa</div>
                    <div className="text-blue-200 text-sm">
                      Specialized in NRI financial planning
                    </div>
                  </div>
                </div>
                <div
                  onMouseEnter={() => setActiveCountry("samerica")}
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
                  className="w-auto h-60 object-cover"
                />
                {/* India */}
                <div
                  id="IndiaPin"
                  className={`absolute w-3 h-3 bg-gold rounded-full top-[40%] left-[70%] transition-all duration-300 
                    ${activeCountry === "india" ? "w-6 h-6" : "w-3 h-3"}`}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></span>
                </div>

                {/* Pakistan */}
                <div
                  id="PakistanPin"
                  className={`absolute w-3 h-3 bg-gold rounded-full top-[34%] left-[67%] transition-all duration-300 
                    ${activeCountry === "pakistan" ? "w-6 h-6" : "w-3 h-3"}`}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></span>
                </div>

                {/* Nigeria */}
                <div
                  id="NigeriaPin"
                  className={`absolute w-3 h-3 bg-gold rounded-full top-[50%] left-[50%] transition-all duration-300 
                    ${activeCountry === "nigeria" ? "w-6 h-6" : "w-3 h-3"}`}
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

                {/* South Africa */}
                <div
                  id="USPin"
                  className={`absolute w-3 h-3 bg-gold rounded-full top-[50%] left-[55%] transition-all duration-300
                    ${activeCountry === "safrica" ? "w-6 h-6" : "w-3 h-3"}`}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></span>
                </div>

                {/* South America */}
                <div
                  id="SAPin"
                  className={`absolute w-3 h-3 bg-gold rounded-full top-[65%] left-[32%] transition-all duration-300
                    ${activeCountry === "samerica" ? "w-6 h-6" : "w-3 h-3"}`}
                >
                  <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeatMap;
