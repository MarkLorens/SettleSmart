import Navbar from "../components/Navbar";
const CustomerReview = () => {
  return (
    <section id="HeroSection" className="bg-gray-50 flex">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-30 px-4 smL:px-6 lg:px-6 py-8 w-full">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 font-oswald">
            Leave a Review
          </h3>
          <p className="text-gray-600">
            Share your experience and help others make informed decisions
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <h3 className="mb-6 text-xl font-bold">Overall Rating</h3>
            <div className="flex mb-2 space-x-1">
              <i className="fa-solid fa-star cursor-pointer text-gray-600"></i>
              <i className="fa-solid fa-star cursor-pointer text-gray-600"></i>
              <i className="fa-solid fa-star cursor-pointer text-gray-600"></i>
              <i className="fa-solid fa-star cursor-pointer text-gray-600"></i>
              <i className="fa-solid fa-star cursor-pointer text-gray-600"></i>
            </div>
            <p className="text-gray-600 text-sm">Rate your experience</p>
          </div>
          <form action="#" id="ReviewForm" className="p-6">
            <div className="mb-6">
              <label
                for="ReviewName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                id="ReviewName"
                type="text"
                name="ReviewName"
                placeholder="Write your name..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue focus:border-transparent transition-all"
              />
            </div>
            <div className="mb-6">
              <label
                for="ReviewContent"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Review
              </label>
              <textarea
                placeholder="Tell others your experience. What did you like? What could be improved?"
                name="ReviewContent"
                id="ReviewContent"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>
            <div
              id="FormActions"
              className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200"
            >
              <button
                type="button"
                className="flex-1 sm:flex-none px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                Clear the form
              </button>
              <button
                type="submit"
                className="flex-1 px-8 py-3 bg-blue text-white rounded-lg hover:bg-blue/90 cursor-pointer transition-colors font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
