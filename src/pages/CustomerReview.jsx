import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { createReview } from "../service/ReviewService";
import Footer from "../components/Footer";
import { getApprovedReviews } from "../service/ReviewService";

const CustomerReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getApprovedReviews();
      setReviews(data);
    };

    fetchData();
  }, []);

  const clearForm = () => {
    setRating(0);
    setHover(0);
    setName("");
    setReviewContent("");
    setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || name === "" || reviewContent === "") {
      setErrorMsg("Please fill in all the field");
    } else {
      const reviewData = {
        rating,
        name,
        reviewContent,
      };

      createReview(reviewData);
      setRating(0);
      setHover(0);
      setName("");
      setReviewContent("");
      setErrorMsg("");

      alert("Thank you for submitting a review " + name + "!");
    }
  };

  return (
    <section id="ReviewSection" className="bg-gray-50 flex flex-col">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-30 px-4 smL:px-6 lg:px-6 py-8 w-full">
        <div className="flex mb-8 mr-4">
          <a
            href="#ReviewForm"
            className="ml-auto bg-gold text-white p-4 rounded-lg ext-lg hover:bg-gold/90 transition-colors cursor-pointer"
          >
            Go to the form
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white mb-16">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-blue p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h4 className="font-semibold mb-2">{review.name}</h4>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fa-solid fa-star ${i < review.rating ? "text-gold" : "text-gray-500"
                      }`}
                  ></i>
                ))}
              </div>
              <p className="tracking-wider font-light font-montserrat">
                {review.reviewContent}
              </p>
            </div>
          ))}
        </div>
        <div className="mb-8" id="ReviewForm">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 font-oswald">
            Leave a Review
          </h3>
          <p className="text-gray-600">
            Share your experience and help others make informed decisions
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden font-montserrat">
          <div className="p-6 border-b border-gray-200 bg-gray-50 z-99">
            <h3 className="mb-6 text-2xl font-bold">Overall Rating</h3>
            <div
              className="flex mb-2 space-x-1"
              onMouseLeave={() => {
                setHover(0);
                console.log("Hit");
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`fa-solid fa-star cursor-pointer text-xl ${star <= (hover || rating) ? "text-gold" : "text-gray-600"
                    }`}
                  onMouseEnter={() => setHover(star)}
                  onClick={() => setRating(star)}
                ></button>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              {rating ? `You rated ${rating}/5` : "Rate the experience"}
            </p>
          </div>
          <form onSubmit={handleSubmit} id="ReviewForm" className="p-6">
            <div className="mb-6">
              <label
                htmlFor="ReviewName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                id="ReviewName"
                type="text"
                name="ReviewName"
                value={name}
                placeholder="Write your name..."
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue focus:border-transparent transition-all"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="ReviewContent"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Review
              </label>
              <textarea
                placeholder="Tell others your experience. What did you like? What could be improved?"
                name="ReviewContent"
                id="ReviewContent"
                rows="6"
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>
            {errorMsg ? (
              <div>
                <p className="text-red-500 text-sm font-light">{errorMsg}</p>
              </div>
            ) : (
              <div></div>
            )}
            <div
              id="FormActions"
              className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200"
            >
              <button
                type="button"
                className="flex-1 sm:flex-none px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={clearForm}
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
      <Footer />
    </section>
  );
};

export default CustomerReview;
