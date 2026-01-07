const ClientReview = () => {
  return (
    <section id="ClientReviewSection" className="py-20 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Stories from our satisfied clients
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          <div id="Review1" className="bg-blue p-8 rounded-2xl shadow-2xl">
            <h4 className="font-semibold mb-2">John Doe</h4>
            <div className="flex mb-4">
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
            </div>
            <p className="tracking-wider font-light">
              Sion helped us plan for retirement and we're now on track to
              retire 5 years earlier than expected. His expertise is invaluable.
            </p>
          </div>
          <div id="Review2" className="bg-blue p-8 rounded-2xl shadow-2xl">
            <h4 className="font-semibold mb-2">Michael P</h4>
            <div className="flex mb-4">
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-regular fa-star text-white"></i>
            </div>
            <p className="tracking-wider font-light">
              The investment strategy Sion created for us has outperformed the
              market consistently. We couldn't be happier!
            </p>
          </div>
          <div id="Review3" className="bg-blue p-8 rounded-2xl shadow-2xl">
            <h4 className="font-semibold mb-2">Christine S</h4>
            <div className="flex mb-4">
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
              <i class="fa-solid fa-star text-gold"></i>
            </div>
            <p className="tracking-wider font-light">
              Professional, knowledgeable, and always available when we need
              advice. Sion truly cares about our financial success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
