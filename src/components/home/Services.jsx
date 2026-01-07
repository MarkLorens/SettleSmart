const Services = () => {
  return (
    <section id="Services-Section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            What <span className="text-gold">SettleSmart</span> Provides
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div
            id="Service-1"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fa-solid fa-piggy-bank text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Retirement Planning</h3>
            <p className="text-gray-600">
              Strategic retirement planning to ensure you can maintain your
              lifestyle after you stadaop working.
            </p>
          </div>
          <div
            id="Service-2"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fa-solid fa-money-bill-trend-up text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Investment Management</h3>
            <p className="text-gray-600">
              Personalized investment strategies designed to grow your wealth
              while managing risk effectively.
            </p>
          </div>
          <div
            id="Service-3"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fa-solid fa-shield-halved text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Insurance Planning</h3>
            <p className="text-gray-600">
              Comprehensive insurance solutions to protect you and your family
              from unexpected events.
            </p>
          </div>
          <div
            id="Service-4"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fa-solid fa-graduation-cap text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Education Funding</h3>
            <p className="text-gray-600">
              Smart strategies to save for your children's education without
              compromising your retirement.
            </p>
          </div>
          <div
            id="Service-5"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fa-solid fa-file-invoice-dollar text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Tax Optimization</h3>
            <p className="text-gray-600">
              Strategic tax planning to minimize your tax burden and maximize
              your after-tax income.
            </p>
          </div>
          <div
            id="Service-6"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fa-solid fa-house text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Estate Planning</h3>
            <p className="text-gray-600">
              Ensure your assets are distributed according to your wishes while
              minimizing estate taxes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
