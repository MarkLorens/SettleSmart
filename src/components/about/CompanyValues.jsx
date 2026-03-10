const CompanyValues = () => {
  return (
    <section
      id="CompanyValues"
      className="bg-linear-to-br from-gray-50 to-blue-50 py-20"
    >
      <div className="max-w-7xl px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl text-blue mb-4">
            Our <span className="text-gold">Core</span> Values
          </h2>
          <p className="text-xl text-gray-600">
            The principles that guide every client relationship
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            id="ValueCard1"
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-heart text-3xl text-blue-800"></i>
            </div>
            <h3 className="text-xl font-bold text-blue mb-3 font-montserrat">
              Empathy
            </h3>
            <p>
              I've been where you are. I understand the stress and uncertainty
              of expat life.
            </p>
          </div>
          <div
            id="ValueCard2"
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-shield-halved text-3xl text-[#329260]"></i>
            </div>
            <h3 className="text-xl font-bold text-blue mb-3 font-montserrat">
              Integrity
            </h3>
            <p>
              Transparent advice with no hidden agendas. Your interests always
              come first.
            </p>
          </div>
          <div
            id="ValueCard3"
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-lightbulb text-3xl text-[#643292]"></i>
            </div>
            <h3 className="text-xl font-bold text-blue mb-3 font-montserrat">
              Expertise
            </h3>
            <p>
              Continuous learning to stay ahead of international financial
              regulations.
            </p>
          </div>
          <div
            id="ValueCard4"
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <i className="fa-solid fa-handshake text-3xl text-orange-600"></i>
            </div>
            <h3 className="text-xl font-bold text-blue mb-3 font-montserrat">
              Partnership
            </h3>
            <p>We're in this together. Your sucess is my success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
