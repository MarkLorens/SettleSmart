const TrackRecord = () => {
  return (
    <section
      id="TrackRecord"
      className="py-20 bg-linear-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue mb-4 font-oswald">
            Track Record of <span className="text-gold">Success</span>
          </h2>
          <p className="text-xl text-gray-600">Real results for real people</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-montserrat">
          <div
            id="AchievementCard1"
            className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-800 cursor-pointer"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i class="fa-solid fa-users text-4xl text-blue-800"></i>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-800 mb-3">200+</div>
              <div className="text-xl font-semibold text-blue mb-2">
                Expats Helped
              </div>
              <p className="text-gray-600">
                Guiding expats from confusion to financial confidence
              </p>
            </div>
          </div>

          <div
            id="AchievementCard2"
            className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#329260] cursor-pointer"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i class="fa-solid fa-euro-sign text-4xl text-[#329260]"></i>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#329260] mb-3">
                €200K+
              </div>
              <div className="text-xl font-semibold text-blue mb-2">
                Expats Helped
              </div>
              <p className="text-gray-600">
                Combined savings achieved for my clients
              </p>
            </div>
          </div>
          <div
            id="AchievementCard3"
            className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#643292] cursor-pointer"
          >
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i class="fa-solid fa-globe text-4xl text-[#643292]"></i>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#643292] mb-3">5+</div>
              <div className="text-xl font-semibold text-blue mb-2">
                Countries
              </div>
              <p className="text-gray-600">
                Serving clients from around the world
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
