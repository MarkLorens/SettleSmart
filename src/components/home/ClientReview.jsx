import { Link } from "react-router-dom";
import { getApprovedReviews } from "../../service/ReviewService";
import { useEffect, useState } from "react";

const ClientReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getApprovedReviews();
      setReviews(data);
    };

    fetchData();
  }, []);

  return (
    <section id="ClientReviewSection" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 font-oswald tracking-wide">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Stories from our satisfied clients
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review.id}
                className="bg-blue p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <h4 className="font-semibold mb-2">{review.name}</h4>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa-solid fa-star ${
                        i < review.rating ? "text-gold" : "text-gray-500"
                      }`}
                    ></i>
                  ))}
                </div>
                <p className="tracking-wider font-light font-montserrat">
                  {review.reviewContent}
                </p>
              </div>
            ))
          ) : (
            <div>
              <p>
                Help us by leaving a review in{" "}
                <Link to={"/customerreview"}>Customer Review page</Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
